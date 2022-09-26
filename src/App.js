import Login from "./components/Login";
import Profile from "./components/Profile";
import './App.css';
import CountrySelector from "./components/Autocomplete";
function App() {
  return (
    <div> 
    <Profile/>
      <Login/>
     <CountrySelector/>
    </div>
  );
}
export default App;
