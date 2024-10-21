import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from "@mui/material/Box"
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import IconButton from '@mui/material/IconButton'
import { exportToExcel } from 'react-json-to-excel';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#111827",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


//Create Row
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 356, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 356, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 356, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 356, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 356, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Tables() {

  const [noOfRows, setNoOfRows] = useState(10);
  const [tableData, setTableData] = useState(rows);


  //select no. of rows
  const handleNoOfRowsChange = (event) => {
    setNoOfRows(parseInt(event.target.value), 10);
  };

  useEffect(() => {
    setTableData(rows.slice(0, noOfRows))
  }, [noOfRows])


  //My custom search for the table
  const HandleSearch = (inputSearch) => {
    if (inputSearch == "") {
      setTableData(rows.slice(0, 10));
    } else {
      // setNoOfRows(0);
      const searchData = rows.filter((ele) => {
        return Object.values(ele).some((e) => {
          return e.toString().toLowerCase().includes(inputSearch)
        });
      })
      setTableData([...searchData])
    }
  }




  return (
    <>
      <div className='flex justify-between my-4'>
        <div className='flex gap-4'>
          <Box sx={{ minWidth: 80, bgcolor: "white", }}>
            <FormControl size='small' fullWidth>
              <InputLabel id="demo-simple-select-label">rows</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={noOfRows}
                label="Age"
                onChange={handleNoOfRowsChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={500}>500</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 40, bgcolor: "white", border: "1px solid #d4d4d8", borderRadius: "5px", paddingLeft: "1px", paddingTop: "1px" }}>
            <IconButton onClick={() => exportToExcel(rows, 'tableData')}>
              <SystemUpdateAltIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Box>
        </div>
        <div>
          <input type="text" name="" id="" onChange={(e) => HandleSearch(e.target.value)} className='w-64 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' placeholder='Table search...' />
        </div>
      </div>

      <TableContainer component={Paper} sx={{
        margin: "10px 0",
      }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead >
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.map((row) =>
            (
              < StyledTableRow key={row.name} >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            )
            )}
          </TableBody>
        </Table>
      </TableContainer >

      {/* <div className='flex justify-end mt-4'>
        <nav aria-label="Page navigation example ">
          <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>

            <li>
              <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-600 border border-gray-300 bg-gray-300 ">2</a>
            </li>

            <li>
              <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
            </li>

            <li>
              <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handlePaginationNext}>
                <span class="sr-only">Next</span>
                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
}