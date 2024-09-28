import Breadcrumb from "@/components/Common/Breadcrumb"
import MedicoList from "@/components/mantenimiento/medicoList/MedicoList"

const MedicoListPage = () => {
  return (
    <>
    <Breadcrumb
      pageName="Listado de Médicos"
      description=""
    />
    <MedicoList/>
  </>
  )
}

export default MedicoListPage
