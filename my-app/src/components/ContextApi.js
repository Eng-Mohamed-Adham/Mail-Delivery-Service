import { createContext } from "react";
import { useEffect,useState } from "react";






 const DataContext = createContext()


 export const ContextData = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [customers, setCustomers] = useState({items:[]})
    const [packages, setPackages] = useState({items:[]})
    const [invoices, setInvoices] = useState({items:[
        {
          name:'Dave',
          idInvoice: 1,
          weight: "3kg",
          price: 10,
      },
      {
        name:'Marry',
        idInvoice: 2,
        weight: "32kg",
        price: 20,
      }
      ]});
    




useEffect(() => {
     async function fetchMoviesJSON() {
        const response = await (await fetch("/data.json"))
      let  data = await response.json();
        

        setCustomers({items:data.customers})
        setPackages({items:data.packages})
        setIsLoading(false)
        
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
    setPackages({items})
    
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
        <DataContext.Provider value={{customers,isLoading,handelDeleteCustomers,handelName,packages,handelDeletePackages,setPackages,invoices,setInvoices}}>
            {children}
        </DataContext.Provider>
    );
}
 
export default DataContext;