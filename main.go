package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl, err := template.ParseFiles("templates/index.html") // Finds and parses HTML template file
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError) // Error handling if HTML template can't be found
			return
		}
		w.Header().Set("Content-Type", "text/html")
		tmpl.Execute(w, nil)
	})

	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		tmpl, err := template.ParseFiles("templates/hello.html")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "text/html")
		tmpl.Execute(w, nil)
	})

	fs := http.FileServer(http.Dir("static"))                 // File server for static assets (CSS and JS)
	http.Handle("/static/", http.StripPrefix("/static/", fs)) // Tells the server to handle any URL starting with "/static/" by looking for the file in the "static" directory

	log.Println("Listening on :8080...")     // Logging to listen on the proxy port of air to enable automatic reloads for local work
	err := http.ListenAndServe(":8000", nil) // The real app port is on 8000
	if err != nil {
		log.Fatal(err)
	}
}
