import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './routers/Routing';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
