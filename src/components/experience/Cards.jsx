const Cards = (data) => {
    const cards = data.value.card

    return (
        <div data-aos='fade-left' className='career-info'>
            {cards.map((card_data, index) => {
                return(
                    <div className='container' key={index}>
                        <h3>{card_data.title} @ <a href={data.value.link} target='_blank'>{data.value.short_name}</a></h3>
                        <p className='date'>{card_data.date}</p>
                        <p>{card_data.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards