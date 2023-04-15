//api weather

const url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/6018?apikey=KxYyJnQStyafGqljXa8ZGjW9FMYfXfX9&language=es-ar&metric=true"

fetch(url)
	.then(response => response.json())
	.then(data =>{
        const temperaturaMaxima = data.DailyForecasts[0].Temperature.Maximum.Value;
        const temperaturaMinima = data.DailyForecasts[0].Temperature.Minimum.Value;
        const temperaturaResumen = data.Headline.Text;
        const temperaturaEnlace = data.Headline.Link;

        const htmlMaxima = document.getElementById("maxima")
        const htmlMinima = document.getElementById("minima")
        const htmlResumen = document.getElementById("resumen")
        const htmlLink = document.getElementById("weatherEnlace")
        
        htmlMaxima.textContent = `La temperatura máxima esperada para hoy es ${temperaturaMaxima} °C`
        htmlMinima.textContent = `La temperatura mínima esperada para hoy es ${temperaturaMinima} °C`
        htmlResumen.textContent = `${temperaturaResumen}`
        htmlLink.setAttribute("href", temperaturaEnlace );

    } )
	.catch(err => console.error(err));