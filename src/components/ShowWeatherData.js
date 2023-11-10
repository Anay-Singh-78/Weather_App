import React from 'react'
const ShowWeatherData = ({ data }) => {
    const imageData = {
        'tornado': "https://cdn-icons-png.flaticon.com/128/7687/7687040.png",
        'clouds': "https://cdn-icons-png.flaticon.com/128/4064/4064289.png",
        "blizzard": "https://cdn-icons-png.flaticon.com/128/591/591508.png",
        'snow': 'https://cdn-icons-png.flaticon.com/128/1409/1409305.png',
        'cold front': 'https://cdn-icons-png.flaticon.com/128/2322/2322701.png',
        'rain': 'https://cdn-icons-png.flaticon.com/128/3351/3351979.png',
        'drizzle': 'https://cdn-icons-png.flaticon.com/128/2675/2675897.png',
        'extreme weather': "https://cdn-icons-png.flaticon.com/128/4357/4357551.png",
        'dust storm': 'https://cdn-icons-png.flaticon.com/128/4490/4490878.png',
        'haze': 'https://cdn-icons-png.flaticon.com/128/727/727789.png',
        'mist': 'https://cdn-icons-png.flaticon.com/128/4005/4005901.png',
        'clear':'https://cdn-icons-png.flaticon.com/128/6974/6974833.png',
        'sunny':'https://cdn-icons-png.flaticon.com/128/9231/9231728.png'
    }

    // console.log(data);
    const img_source = `https://flagsapi.com/${data.sys.country}/shiny/32.png`
    const weather = (data.weather[0].main).toLowerCase();
    console.log(weather);
    const weather_img = imageData[weather]
    console.log(weather_img)
    return (

        <div className='flex flex-col items-center'>
            <div className='flex justify-center items-center gap-2'>
                <h1 className='text-slate-100 text-2xl font-semibold place-text'>{data.name}</h1>
                <img src={img_source} alt="Country Icon" />
            </div>
            <p className='text-slate-200 text-xl mt-1 mb-2 font-semibold'>{data.weather[0].main}</p>
            <img src={weather_img} alt="weather icon" className=' w-12 mb-4 mt-2' />
            <p className='text-3xl font-semibold place-text text-slate-900 my-4'> {data.main.temp}°C</p>
            <div className=' w-[50%] items-center flex flex-col gap-10 mt-6 lg:flex-row lg:justify-evenly mb-14 lg:mb-0'>
                <div className='specification-background'>
                    <img src="https://cdn-icons-png.flaticon.com/128/5532/5532989.png" alt="Wind icon" className='specification-image'/>
                    <p className='specification-text  uppercase '>Wind Speed</p>
                    <p className='specification-text' >{data.wind.speed}m/s</p>
                </div>
                <div className='specification-background '>
                    <img src="https://cdn-icons-png.flaticon.com/128/8923/8923689.png" alt="Humidity icon" className='specification-image' />
                    <p className='specification-text  uppercase'>Humidity</p>
                    <p className='specification-text uppercase'>{data.main.humidity}%</p>
                </div>
                <div className='specification-background'>
                    <img src="https://cdn-icons-png.flaticon.com/128/1146/1146869.png" alt="Cloud icon" className='specification-image'/>
                    <p className='specification-text uppercase'>Clouds</p>
                    <p className='specification-text uppercase' >{data.clouds.all}%</p>
                </div>
            </div>
        </div>
    )
}

export default ShowWeatherData