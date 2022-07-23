
import { Box,
} from "@mui/system";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




let data =JSON.parse( localStorage.getItem( 'invoices' ) );


const DisplayInvoices = () => {


    return (
        <Box marginTop='150px'>
          {
            data.map(e => {
              return(
                <TableContainer sx={{ maxHeight: 440 }} key={e.shippingOrder}>
                <Table stickyHeader aria-label="sticky table"  >
                    <TableHead >
                      <TableRow  >
                        <TableCell align="center" colSpan={2}>
                            {e.name}
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                          {e.idInvoice}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => {
    
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
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              )
            })
          }
            
        </Box>
    );
}

export default DisplayInvoices;