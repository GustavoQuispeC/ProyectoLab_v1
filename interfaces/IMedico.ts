export interface IMedico {
  nombres: string;
  apellidos: string;
  especialidad: string;
  observaciones: string;
  telefono: string;
  correo: string;
  fechaModificacion: Date;
  id: number;
  fechaCreacion: Date;
  estado: boolean;
}

export interface IMedicoProps {
  nombres: string;
  apellidos: string;
  especialidad: string;
  observaciones: string;
  telefono: string;
  correo: string;
}

export interface IMedicoError {
  nombres: string;
  apellidos: string;
  especialidad: string;
  observaciones: string;
  telefono: string;
  correo: string;
}