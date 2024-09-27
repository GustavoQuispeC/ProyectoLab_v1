import Breadcrumb from "@/components/Common/Breadcrumb"
import Medico from "@/components/mantenimiento/medico/Medico"




const page = () => {
  return (
    <>
    <Breadcrumb
      pageName="Listado de Médicos"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
    />
    <Medico/>
  </>
  )
}

export default page
