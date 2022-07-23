import { Box,
    TextField,
    Button
    
 } from "@mui/material";


import { useState } from "react";

const CreateInvoive = ({setdata,pack,customerName,setCustomers,customers,invoices,setInvoices}) => {


    const [idInvoices,setIdInvoices] =useState(1)
    const [idPackages,setIdPackages] =useState('')
    const [customerId,setCustomerId] = useState(1)

    const [customername,setCustomer] = useState(customerName)
    const [weight,setWeight] = useState('')
    const [price,setPrice] = useState(1)
    const [shippingOrder,setShippingOrder] = useState(1)
    
    



    const handelPackage =(e) => {
        e.preventDefault();
    
        let dataOfPackages ={
          
          id:idPackages,
          weight,
          customerid:customerId,
          price,
          shippingOrder,
    
        }
        let dataOfcustomer ={
          id:idInvoices,
          name:customername,

        }
        let dataOfInvoices = [{
          name:customername,
          idInvoice:idInvoices,
          idPackages:idPackages,
          weight:weight,
          price:price,
          customerId:customerId,
          shippingOrder:shippingOrder,


        }]

        setdata({items: pack.items.concat(dataOfPackages)})
        setCustomers({items: customers.items.concat(dataOfcustomer)})
        setInvoices(dataOfInvoices)
    localStorage.setItem('invoices', JSON.stringify(invoices))
    
      }
  
      
    return (
        <Box marginTop='120px'>
            <form onSubmit={handelPackage}>
  
  <TextField
        id="outlined-number"
        label="id_Invoice"
        type="number"
        value={idInvoices}
        onChange={e => setIdInvoices(e.target.value)}

        

        InputLabelProps={{
          shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />

              <TextField
        id="outlined-number"
        label="id_Package"
        type="text"
        value={idPackages}
        onChange={e => setIdPackages(e.target.value)}

        

        InputLabelProps={{
          shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />

    <TextField
              
              id="outlined-number"
              label="customer Name"
              type="text"
              value={customername}
              onChange={e => setCustomer(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />

    <TextField
              id="outlined-number"
              label="Weight"
              type="text"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />
              <TextField
              id="outlined-number"
              label="CustomerId"
              type="number"
              value={customerId}
              onChange={e => setCustomerId(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />

    <TextField
              id="outlined-number"
              label="Price"
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />
              <TextField
              id="outlined-number"
              label="shippingOrder"
              type="number"
              value={shippingOrder}
              onChange={e => setShippingOrder(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />
             <Button variant='contained' type="submit"  sx={{marginTop:'10px'}}>
                Add
            </Button>
  </form>
        </Box>
    );
}
 
export default CreateInvoive;




