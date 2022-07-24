
import { Box,
} from "@mui/system";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




// let data =JSON.parse( localStorage.getItem( 'invoices' ) );

const  date = new Date()



const DisplayInvoices = ({invoices}) => {



    return (
        <Box marginTop='150px'>
          
          {
            invoices.items.map(e => {
              return(
                <TableContainer sx={{ maxHeight: 440 }} key={e.idInvoice}>
                 
                <Table stickyHeader aria-label="sticky table"  >
                  
                    <TableHead >
                    <TableRow  >
                      <TableCell align="center" colSpan={1}>
                        Date:
                        </TableCell>

                        <TableCell align="center" colSpan={1}>
                         {date.getDate()}/ {date.getMonth() + 1}/{date.getFullYear()}
                        </TableCell>
                        <TableCell align="center" colSpan={1}>
                          Hours :
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                        { date.getHours()} - {date.getMinutes()} - {date.getSeconds()}
                        </TableCell>
                        </TableRow>

                      <TableRow  >
                      <TableCell align="center" colSpan={1}>
                            Name:
                        </TableCell>

                        <TableCell align="center" colSpan={1}>
                            {e.name}
                        </TableCell>
                        <TableCell align="center" colSpan={1}>
                            IdInvoice:
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                          {e.idInvoice}
                        </TableCell>
                      
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* {invoices.map((row) => {
    
                      return (
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          key={row.shippingOrder}
                        >
                          <TableCell component="th" scope="row">
                            {row.idPackages}
                          </TableCell>
                          <TableCell  component="th" scope="row">{row.weight}</TableCell>
                          <TableCell component="th" scope="row" >{row.price}</TableCell>
                        
                        </TableRow>
                      )
                    })} */}
                      <TableRow>
                      <TableCell align="center" colSpan={1}>
                          Weight:
                          </TableCell>
                        <TableCell align="center" colSpan={1}>
                            {e.weight}
                        </TableCell>

                        <TableCell align="center" colSpan={1}>
                          Price:
                          </TableCell>
                        <TableCell align="center" colSpan={3}>
                          {e.price}
                        </TableCell>
                        </TableRow>


                        <TableRow>
                        <TableCell align="center" colSpan={1}>
                          Totalweight:
                          </TableCell>

                          <TableCell colSpan={1}>
                          {e.weight}
                        </TableCell>
                        {/* <TableCell rowSpan={2} /> */}
                        <TableCell align="center" colSpan={1}>
                            TotalPrice:
                        </TableCell>
                        <TableCell colSpan={1}>
                          {e.price}
                        </TableCell>
                        
                        </TableRow>
                        
                          
                        


                  </TableBody>
                
                </Table>
                <br/>
                  <br/>
                  <br/>
              </TableContainer>
              )
            })
          }
            
        </Box>
    );
}

export default DisplayInvoices;