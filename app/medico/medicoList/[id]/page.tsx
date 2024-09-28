"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getMedicoById, updateMedico } from "@/helpers/medico/Medico.helper";
import { IMedicoProps } from "@/interfaces/IMedico";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { TextField } from "@mui/material";
import { Button } from "@nextui-org/react";
import { FaUserCheck, FaNotesMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePhonelinkRing, MdEmail } from "react-icons/md";
import { IoIosSave, IoMdArrowRoundBack } from "react-icons/io";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { validateMedicoForm } from "@/utils/formMedicoValidation";
import { handleNotifyError, handleNotifySucces } from "@/utils/toastity";

const MedicoUpdatePage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  //! Estado para controlar si el formulario ha sido enviado
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [medicos, setMedicos] = useState<IMedicoProps>({
    nombres: "",
    apellidos: "",
    telefono: "",
    correo: "",
    especialidad: "",
    observaciones: "",
  });
  const [errors, setErrors] = useState<IMedicoProps>({
    nombres: "",
    apellidos: "",
    telefono: "",
    correo: "",
    especialidad: "",
    observaciones: "",
  });

  //! Obtener producto por ID
  useEffect(() => {
    const fetchMedico = async () => {
      const medico = await getMedicoById(params.id);
      console.log(medico);

      if (medico) {
        setMedicos({
          nombres: medico.nombres || "",
          apellidos: medico.apellidos || "",
          telefono: medico.telefono || "",
          correo: medico.correo || "",
          especialidad: medico.especialidad || "",
          observaciones: medico.observaciones || "",
        });
      } else {
        router.push("/medico/medicoList");
      }
    };

    fetchMedico();
  }, [params.id, router]);

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
        await updateMedico(params.id, medicos);
        handleNotifySucces();
        setTimeout(() => {
          router.push("/medico/medicoList");
        }, 2000);
      } catch (error) {
        handleNotifyError();
        console.error(`Error adding medics: ${error.message}`);
      }
    }
  };

  return (
    <>
      <Breadcrumb pageName="Listado de Médicos" description="" />

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
export default MedicoUpdatePage;
