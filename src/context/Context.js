import { createContext, useContext, useState } from "react";

export const WeatherContext = createContext();

export const ContextProvider = ({children})=>{
    const [city , setCity] = useState(null);
    const [cityData , setCityData] = useState('');
    const [location , setLocation] = useState(false);
    const [data , setData] = useState(null);
    const [loader , setLoader] = useState(false);
    const API_KEY = "270a50d966196f485155d52ea8a0261f"
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?"
    const onLocationFetch = () =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success , prblm);
        }
        else{
            console.log("Geolocation not suppoerted");
        }
    }
    const success = async(position)=>{
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation(true);
        try{
            setLoader(true);
            const response = await fetch(`${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            const result = await response.json();
            console.log(result);
            setData(result);
            setLoader(false);
        }
        catch(err){
            console.log("Error Occured during fetching the data ");
            console.error(err.message);
            setLocation(false)
        }
        localStorage['authorizedGeoLocation'] = 1;

    }
    const prblm = ()=>{
        console.log("There has been an issue");
        localStorage['authorizedGeoLocation'] = 0;
    }
    const handleForm = async(e)=>{
        e.preventDefault();
        try{
        setLoader(true);
        const response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
        const val = await response.json();
        setCityData(val);
        setLoader(false);
        }
        catch(err){
            console.log("Error Occured during data fetch");
        }
    }
const value = {
    city,
    setCity,
    location,
    setLocation,
    data,
    setData,
    loader,
    onLocationFetch,
    handleForm,
    cityData,
    setCityData
}
return <WeatherContext.Provider value={value}>
    {children}
</WeatherContext.Provider>
}

export const useWeather = ()=>{
   return useContext(WeatherContext);
}
