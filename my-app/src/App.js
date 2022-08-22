import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import './App.css';
import Customers from './components/Customers';



import Header from './components/Header';
import Packages from './components/Packages';
import CreateInvoive from './components/createInvoice';
import DisplayInvoices from './components/DisplayInvoices';

import { ContextData } from './components/ContextApi';



function App() {

  return (
    <div className="App">
       

        <ContextData>
          <Router>
            <Header />
            <Routes >
              <Route path='/'
              exact
               element={<Customers />}  />
              <Route path='packages'
               element={<Packages/>}  />

              <Route path='createinvoice' element={<CreateInvoive/>} />

              <Route path='invoices' element={<DisplayInvoices/>} 
                />
           
            </Routes>

          </Router>
          </ContextData>
    </div>

  );
}

export default App;