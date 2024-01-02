import { BrowserRouter, withRouter } from 'react-router-dom';
import Routing from './routers/Routing';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App(location) {
  return (
    <div className="App" >
      <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
      <BrowserRouter>
        <Navbar />
        <div className=''>
          <Routing />
        </div>
      </BrowserRouter>
      </CSSTransition>
        </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
