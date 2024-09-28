"use client";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { blueGrey, yellow } from "@mui/material/colors";
import { Link } from "@nextui-org/react";
import { IoMdPersonAdd } from "react-icons/io";
import { IMedico } from "@/interfaces/IMedico";
import { getMedicos } from "@/helpers/medico/Medico.helper";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Zoom } from "@mui/material";


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

const MedicoList = () => {
  const [medicos, setMedicos] = useState<IMedico[]>([]);

  useEffect(() => {
    const fetchMedicos = async () => {
      const medicos = await getMedicos();
      setMedicos(medicos);
    };

    fetchMedicos();
  }, []);

  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center justify-between py-3">
          <Link
            href="/medicoAdd"
            style={{ color: "darkgreen", fontWeight: "bold" }}
          >
            <IoMdPersonAdd size={22} />
            &nbsp;Agregar Producto
          </Link>
        </div>

        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
          <div className="flex items-center w-full space-x-3 md:w-auto"></div>
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
                <StyledTableCell align="left">Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {medicos.map((medico) => (
                <StyledTableRow key={medico.id}>
                  <StyledTableCell component="th" scope="row">
                    {medico.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {medico.nombres}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {medico.apellidos}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {medico.especialidad}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {medico.telefono}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {medico.correo}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <div className="flex items-center gap-4">
                      <Tooltip TransitionComponent={Zoom} title="Ver">
                        <Link href={`#`} style={{ color: "#fb8c00" }}>
                          <FaEye />
                        </Link>
                      </Tooltip>
                      <Tooltip TransitionComponent={Zoom} title="Editar">
                        <Link
                          href={`/productList/${medico.id}`}
                          style={{ color: "#607d8b" }}
                        >
                          <BsFillPencilFill />
                        </Link>
                      </Tooltip>
                      <Tooltip TransitionComponent={Zoom} title="Eliminar">
                        <Link href={`#`} style={{ color: "red" }}>
                          <RiDeleteBin6Fill />
                        </Link>
                      </Tooltip>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default MedicoList;
