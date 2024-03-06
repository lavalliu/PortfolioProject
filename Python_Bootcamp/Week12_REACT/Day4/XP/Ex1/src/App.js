import './App.css';
import Car from './car';

export default function App() {
  const carInfo = {name: "Ford", model: "Mustang"};
  return (
    <div className="App">
      <Car carDetails={carInfo} />
    </div>
  );
}







