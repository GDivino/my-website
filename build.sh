#! /bin/bash
npm run build
mv ./src/components/landing/face/scene.json ./dist/assets/scene.json
mv ./src/components/landing/face/runtime.js ./dist/assets/runtime.js
mv ./src/components/landing/face/raleway_regular.json ./dist/assets/raleway_regular.json
mv ./prod_files/index.html ./dist/assets/index.html