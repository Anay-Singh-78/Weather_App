import {Routes , Route} from 'react-router-dom' 
import YourWeather from './pages/YourWeather';
import LocationWeather from './pages/LocationWeather';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<YourWeather/>}/>
      <Route path='/location' element={<LocationWeather/>}/>
     </Routes>
    </div>
  );
}

export default App;
