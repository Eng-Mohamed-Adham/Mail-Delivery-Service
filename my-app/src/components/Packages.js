

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton  from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { TextField } from '@mui/material';

import { useState } from 'react';






const Packages = ({packagesData,onDelete,setPackages}) => {

  const [id,setId] =useState('')
  const [customerid,setCustomer] = useState(1)
  const [weight,setWeight] = useState('')
  const [price,setPrice] = useState(1)
  const [shippingOrder,setShippingOrder] = useState(1)








  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  const handelPackage =(e) => {
    e.preventDefault();

    let data ={
      id,
      customerid,
      weight,
      price,
      shippingOrder,

    }
    setPackages({items: packagesData.items.concat(data)})


  }




    return (
        <Box marginTop='120px'>
       
          {
            !open ? <Box
            sx={{
              marginTop:'50px'
            }}
           
             
            >
              
              <form onSubmit={handelPackage}>
  
              <TextField
                    id="outlined-number"
                    label="id"
                    type="text"
                    value={id}
                    onChange={e => setId(e.target.value)}
  
                    
  
                    InputLabelProps={{
                      shrink: true,
                          }}
                          sx={{marginTop:'10px',marginLeft:'10px'}}
                        />
  
                <TextField
                          id="outlined-number"
                          label="customer Id"
                          type="number"
                          value={customerid}
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
            
            </Box> : ''
          }
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id Of Packages</TableCell>
                  <TableCell>Customer Id</TableCell>
                  <TableCell>Weight</TableCell>
                  <TableCell>Price</TableCell>
                
                
                  <TableCell>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={handleClick}
                    >
                      <AddIcon />
                    </IconButton>
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {packagesData.items.map((row) => {

                  return (
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      key={row.shippingOrder}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>

                        

                      <TableCell >
                    
                       {row.customerid} 
                      
                                      
                        
                      </TableCell>

                      <TableCell >{row.weight}</TableCell>
                      <TableCell >{row.price}</TableCell>
                      <TableCell ><Button
                      variant="contained"
                      onClick={() => onDelete(row.id)}
                      >Delete</Button></TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

    );
}

export default Packages;


