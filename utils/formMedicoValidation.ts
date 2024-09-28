import { IMedicoProps, IMedicoError } from "@/interfaces/IMedico";

export function validateMedicoForm(medico: IMedicoProps): IMedicoError {
  const errors: IMedicoError = {
    nombres: "",
    apellidos: "",
    especialidad: "",
    telefono: "",
    correo: "",
    observaciones: "",
  };

  if (!medico.nombres.trim()) {
    errors.nombres = "El campo nombre es requerido";
  }
  if (!medico.apellidos.trim()) {
    errors.apellidos = "El campo apellido es requerido";
  }
  if (!medico.especialidad.trim()) {
    errors.especialidad = "El campo especialidad es requerido";
  }
  if (!medico.telefono.trim()) {
    errors.telefono = "El campo telefono es requerido";
  }
  if (!medico.correo.trim()) {
    errors.correo = "El campo email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(medico.correo)) {
    errors.correo = "El email es inválido";
  }
  if (!medico.observaciones.trim()) {
    errors.observaciones = "El campo observaciones es requerido";
  }

  return errors;
}
