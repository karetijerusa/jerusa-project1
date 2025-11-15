import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Service';
import Form from './Components/Form';

function App () {
    return(
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='About/' element={<About />} />
                    <Route path='Services/' element={<Services />} />
                    <Route path='Form/' element={<Form />} />
                </Routes>
            </Router>

        </div>

    )
}
export default App;