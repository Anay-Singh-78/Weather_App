import React from 'react'
import { useWeather } from '../context/Context'
import ShowWeatherData from '../components/ShowWeatherData';
import Loader from '../components/Loader';
const LocationWeather = () => {
    const {city, setCity , cityData,loader , handleForm} = useWeather();
  return (
    <div>
      <div>
        <form action="" onSubmit={handleForm} className='flex justify-center items-center mb-8 gap-4'>
            <input
            type='text'
            placeholder='Search for city...'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            className='bg-[rgba(255,255,255,0.25)] w-[50%] lg:w-[25rem] text-white px-4 py-1 input-text rounded-2xl placeholder:text-white placeholder:opacity-80 focus:outline-none'
            spellCheck="false"
            />
            <button
            type='submit'>
                <img src="https://cdn-icons-png.flaticon.com/128/954/954591.png" alt="Search Icon" className='w-8' />
            </button>
        </form>
        </div>
        <div>
                {
                    loader ? (<Loader/>):(
                      cityData ? (cityData.message !== 'city not found' ? (<ShowWeatherData data={cityData}/>) :(<div className='flex flex-col items-center h-[50vh] justify-center'>
                        <img src="https://cdn-icons-png.flaticon.com/128/3855/3855833.png" alt="" className='w-40 mb-4'/>
                       <p className='specification-text '> Cannot determine weather of your location</p> 
                        </div>)):(<div></div>)
                    )
                }
                </div>
    </div>
  )
}

export default LocationWeather