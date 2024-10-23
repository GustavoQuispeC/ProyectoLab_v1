import Breadcrumb from "@/components/Common/Breadcrumb"
import MedicoList from "@/components/mantenimiento/medicoList/MedicoList"

const MedicoListPage = () => {
  return (
    <>
    <Breadcrumb
      pageName="Listado de Personal de Salud"
      description=""
    />
    <MedicoList/>
  </>
  )
}

export default MedicoListPage
