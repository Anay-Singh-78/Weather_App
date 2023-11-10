import React from 'react'
import { useWeather } from '../context/Context'
import Loader from '../components/Loader';
import ShowWeatherData from '../components/ShowWeatherData';

const YourWeather = () => {
    const {location , onLocationFetch , data , loader} = useWeather();
  return (
    <div>
        {
            !location ? (<div className=''>
                <div className='w-20 aspect-square flex justify-center items-center mx-auto rounded-full location-color mb-4'>
                    <img src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="location icon" className='w-10 h-10' />
                </div>
                <p className='text-xl lg:text-2xl location-para text-slate-200 font-semibold bg-[rgba(0,0,0,0.15)] inline-block px-6 py-2 rounded-xl'>Grant Location Access</p>
                <p className='location-text text-xs pt-2 text-slate-100 font-medium'>Allow Access to get Weather information</p>
                <button onClick={onLocationFetch} className='location-btn mt-10 lg:mt-12'>
                    Grant Access
                </button>
            </div>):(<div>
                {
                    loader ? (<Loader/>):(
                        data ? (<ShowWeatherData data={data}/>) :(<div>
                       <p> Cannot determine weather of your location</p> 
                       <p>Please try Reloading the page</p>
                        </div>)
                    )
                }
                </div>)
        }
    </div>
  )
}

export default YourWeather