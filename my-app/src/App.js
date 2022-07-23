import React, { useState, useEffect } from 'react';
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





function App() {


  

  const [customers, setCustomers] = useState({items:[]})
  const [packages, setPackages] = useState({items:[]})
  const [invoices, setInvoices] = useState([]);




useEffect(() => {
  async function fetchMoviesJSON() {
    const response = await (await fetch("/data.json"))
    let data = await response.json();
    

    
    setCustomers({items:data.customers})

    setPackages({items:data.packages})
    
  }
  fetchMoviesJSON()


},[])










const handelDeleteCustomers = (uniqe_Id) => {

 let items = customers.items;
 let i = items.findIndex(item => item.id === uniqe_Id)
 items.splice(i,1)
 setCustomers({items})
}

const handelDeletePackages = (uniqe_Id) => {

  let items = packages.items;
  let i = items.findIndex(item => item.id === uniqe_Id)
  items.splice(i,1)
  setCustomers({items})
  
 }

 let customerName;

 const handelName = (uniqe_Id) => {

  let IdOfName = customers.items.find(e => e.id === uniqe_Id )
  

    for(let obj in IdOfName){
      customerName = IdOfName[obj]
      
    }
    return customerName

}





  return (
    <div className="App">
       

        
          <Router>
            <Header />
            <Routes >
              <Route path='customers'
              exact
               element={<Customers 
               customersData={customers}
                onDelete = {handelDeleteCustomers}
                handelName={handelName}
                

                />}  />
              <Route path='packages'
               element={<Packages
                packagesData={packages}
                onDelete = {handelDeletePackages}
                setPackages={setPackages}

                 />}  />

              <Route path='createinvoice' element={<CreateInvoive
              setdata = {setPackages}
              pack={packages}
              customerName={handelName}
              setCustomers={setCustomers}
              customers={customers}
              invoices={invoices}
              setInvoices={setInvoices}
               />} />

              <Route path='invoices' element={<DisplayInvoices
               />} 
                />
           
            </Routes>

          </Router>
    </div>

  );
}

export default App;