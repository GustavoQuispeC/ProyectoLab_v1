import Breadcrumb from '@/components/Common/Breadcrumb'
import MedicoAdd from '@/components/mantenimiento/medicoAdd/MedicoAdd'


const MedicoAddPage = () => {
  return (
    <>
    <Breadcrumb
    pageName="Agregar Personal de Salud"
    description=""
  />
  <MedicoAdd/>
    </>
    
  )
}

export default MedicoAddPage