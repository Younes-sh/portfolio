import { BrowserRouter } from 'react-router-dom';
import Routing from './routers/Routing';
import Navbar from './Components/Navbar/Navbar';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className=''>
          <Routing />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
