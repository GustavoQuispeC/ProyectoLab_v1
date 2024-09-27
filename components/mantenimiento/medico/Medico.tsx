"use client";
import { use, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { blueGrey } from "@mui/material/colors";
import { Button } from "@nextui-org/react";
import { IoMdPersonAdd } from "react-icons/io";
import { IMedico } from "@/interfaces/IMedico";
import { getMedicos } from "@/helpers/medico/Medico.helper";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: blueGrey[500],
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

const Medico = () => {
  const [medico, setMedico] = useState<IMedico[]>([]);

  useEffect(() => {
    const fetchMedicos = async () => {
      const medicos = await getMedicos();
      setMedico(medicos);
    };

    fetchMedicos();
  }, []);
  console.log(medico);
  return (
    <>
      <div className="container px-4 mx-auto h-a" >
        <div className="flex items-center justify-between py-4">
          <Button color="primary" variant="faded">
            <IoMdPersonAdd size={20} />
            Nuevo
          </Button>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="left">Nombres</StyledTableCell>
                <StyledTableCell align="left">Apellidos</StyledTableCell>
                <StyledTableCell align="left">Especialidad</StyledTableCell>
                <StyledTableCell align="left">Telefono</StyledTableCell>
                <StyledTableCell align="left">Correo</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {medico.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.nombres}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.apellidos}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.especialidad}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.telefono}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.correo}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Medico;
