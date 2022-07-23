

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


const Customers = ({customersData,onDelete,handelName}) => {

  
    return (
        <TableContainer component={Paper} sx={{ marginTop:'60px'}}>
             <Typography
          sx={{ flex: '1 1 100%' ,marginTop:'50px'}}
          variant="h6"
          id="tableTitle"
          component="div"
         
        >
          Customers Table
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          
          <TableHead>
              
            <TableRow>

              <TableCell >id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {customersData.items.map((row,id) => {

              return (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  key={row.id}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell >{row.name}</TableCell>
                  <TableCell >
                      <Link to='/createinvoice'>
                        <Button variant="contained"

                         onClick={() => handelName(row.id)}

                         >Create Invoice</Button>
                      </Link>
                    </TableCell>

                  <TableCell ><Button
                  onClick={() => onDelete(row.id)}
                  variant="contained">Delete</Button></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
 
export default Customers;