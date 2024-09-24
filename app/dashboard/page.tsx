import Breadcrumb from "@/components/Common/Breadcrumb";
import Dashboard from "@/components/Dashboard";

const DashboardPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Dashboard Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Dashboard />
    </>
  );
};

export default DashboardPage;
