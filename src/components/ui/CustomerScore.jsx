import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import { AiOutlineLineChart, AiFillStar } from "react-icons/ai";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.warning.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



function createData(queu, answer, noAnswer, score) {
  return { queu, answer, noAnswer, score };
}
const value = [2.5, 3, 2, 5];
const rows = [
  createData("1000", 0, 0, value[0]),
  createData("1001", 0, 0, value[1]),
  createData("1002", 0, 0, value[2]),
  createData("1003", 0, 0, value[3]),
  createData("1004", 0, 0, value),
  createData("1006", 0, 0, value),
  createData("1007", 0, 0, value),
  createData("1008", 0, 0, value),
  createData("1060", 0, 0, value),
  createData("1061", 0, 0, value),
  createData("1063", 0, 0, value),
  createData("1065", 0, 0, value),
  createData("2004", 0, 0, value),
];


const labels = {
  1: "ضعیف",
  2: 'نسبتا"ضعیف',
  3: "خوب",
  4: "بسیارخوب",
  5: "عالی",
};

const CustomerScore = () => {
  return (
    <Box
      sx={{
        width: 350,
        height: 350,
      }}
    >
      <Box
        row
        sx={{
          width: 800,
          height: 50,
          backgroundColor: "#ffd740",
          color: "red",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 15,
          borderRadius: 5,
          p: 2,
        }}
      >
        <Typography variant="h5" color="#f57c00">
          تعداد تماس پاسخ داده شده و امتیازبندی
        </Typography>
        <AiOutlineLineChart sx={{ color: "#f57c00" }} size={30} />
      </Box>
      <TableContainer
        component={Paper}
        sx={{ width: 800, height: 500, marginLeft: 17 }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <Typography variant="h6">صف</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="h6">پاسخ داده شده</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="h6">بدون پاسخ</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="h6">امتیاز تماس</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">
                  <Typography variant="h6">{row.queu}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">{row.answer}</StyledTableCell>
                <StyledTableCell align="center">{row.noAnswer}</StyledTableCell>
                <StyledTableCell align="left">
                  <Box sx={{ display: "flex" }}>
                    <Rating
                      name="text-feedback"
                      value={row.score}
                      readOnly
                      precision={0.5}
                      size="small"
                      emptyIcon={
                        <AiFillStar
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomerScore;
