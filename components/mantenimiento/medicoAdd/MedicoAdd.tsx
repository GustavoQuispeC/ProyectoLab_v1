"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { IMedicoError, IMedicoProps } from "@/interfaces/IMedico";
import { addMedico } from "@/helpers/medico/Medico.helper";
import { validateMedicoForm } from "@/utils/formMedicoValidation";

import { TextField } from "@mui/material";
import { Button } from "@nextui-org/react";
import { FaUserCheck, FaNotesMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePhonelinkRing, MdEmail } from "react-icons/md";
import { IoIosSave, IoMdArrowRoundBack } from "react-icons/io";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const MedicoAdd = () => {
  const router = useRouter();

  //!estado para almacenar los datos del medico
  const [medicos, setMedicos] = useState<IMedicoProps>({
    nombres: "",
    apellidos: "",
    especialidad: "",
    telefono: "",
    correo: "",
    observaciones: "",
  });

  //! estado para almacenar los errores
  const [errors, setErrors] = useState<IMedicoError>({
    nombres: "",
    apellidos: "",
    especialidad: "",
    telefono: "",
    correo: "",
    observaciones: "",
  });

  //! Estado para controlar si el formulario ha sido enviado
  const [isSubmitted, setIsSubmitted] = useState(false);

  //! Validación en tiempo real en los inputs
  const handleChange = (e: any) => {
    e.preventDefault();
    setMedicos({
      ...medicos,
      [e.target.name]: e.target.value,
    });

    // Validar el campo específico que se está modificando
    const updatedErrors = validateMedicoForm({
      ...medicos,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: updatedErrors[e.target.name],
    });
  };

  //! Función para enviar los datos del médico al backend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true); // Marca que se intentó enviar el formulario
    const validationErrors = validateMedicoForm(medicos);
    setErrors(validationErrors);

    if (Object.values(validationErrors).every((error) => !error)) {
      try {
        await addMedico(medicos);
        handleNotifySucces();
        setTimeout(() => {
          router.push("/medicoList");
        }, 4000);
      } catch (error) {
        handleNotifyError();
        console.error(`Error adding medics: ${error.message}`);
      }
    }
  };

  const handleNotifySucces = () => {
    toast.success("Médico registrado correctamente!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleNotifyError = () => {
    toast.error("Error al registrar médico!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="container mx-auto mb-64 rounded-md px-4 pb-8 dark:bg-current">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl py-8 font-[sans-serif]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative flex flex-col space-y-2">
              <TextField
                sx={{ width: "30ch" }}
                name="nombres"
                label="Nombres"
                variant="standard"
                value={medicos.nombres}
                onChange={handleChange}
                error={isSubmitted && !!errors.nombres}
                helperText={isSubmitted && errors.nombres}
              />
              <FaUserCheck className="absolute left-72 top-7" />
            </div>

            <div className="relative flex flex-col space-y-2">
              <TextField
                sx={{ width: "30ch" }}
                name="apellidos"
                label="Apellidos"
                variant="standard"
                value={medicos.apellidos}
                onChange={handleChange}
                error={isSubmitted && !!errors.apellidos}
                helperText={isSubmitted && errors.apellidos}
              />
              <FaUserCheck className="absolute left-72 top-7" />
            </div>

            <div className="relative flex flex-col space-y-2">
              <TextField
                sx={{ width: "30ch" }}
                name="especialidad"
                label="Especialidad"
                variant="standard"
                value={medicos.especialidad}
                onChange={handleChange}
                error={isSubmitted && !!errors.especialidad}
                helperText={isSubmitted && errors.especialidad}
              />
              <FaUserDoctor className="absolute left-72 top-7" />
            </div>

            <div className="relative flex flex-col space-y-2">
              <TextField
                type="number"
                sx={{ width: "30ch" }}
                name="telefono"
                label="Telefono"
                variant="standard"
                value={medicos.telefono}
                onChange={handleChange}
                error={isSubmitted && !!errors.telefono}
                helperText={isSubmitted && errors.telefono}
              />
              <MdOutlinePhonelinkRing className="absolute left-72 top-7" />
            </div>

            <div className="relative flex flex-col space-y-2">
              <TextField
                sx={{ width: "30ch" }}
                name="correo"
                label="Correo"
                variant="standard"
                type="email"
                value={medicos.correo}
                onChange={handleChange}
                error={isSubmitted && !!errors.correo}
                helperText={isSubmitted && errors.correo}
              />
              <MdEmail className="absolute left-72 top-7" />
            </div>

            <div className="relative flex flex-col space-y-2">
              <TextField
                sx={{ width: "30ch" }}
                name="observaciones"
                label="Observaciones"
                variant="standard"
                value={medicos.observaciones}
                onChange={handleChange}
                error={isSubmitted && !!errors.observaciones}
                helperText={isSubmitted && errors.observaciones}
              />
              <FaNotesMedical className="absolute left-72 top-7" />
            </div>
          </div>

          <div className="mt-6 flex items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <Button color="primary" variant="flat" type="submit">
                <IoIosSave size={20} />
                Guardar
              </Button>
              <Button
                color="danger"
                variant="flat"
                type="button"
                onClick={() => router.back()}
              >
                <IoMdArrowRoundBack size={20} />
                Volver
              </Button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default MedicoAdd;
