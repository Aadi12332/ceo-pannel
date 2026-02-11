import MainLayout from "../../../components/layout/MainLayout";
import PostmortemBuilder from "./PostmortemBuilder";
import Mitigation from "./Mitigation";

const IncidentDetails = () => {

  return (
    <MainLayout>
      <Mitigation />
      <PostmortemBuilder />
    </MainLayout>
  );
};

export default IncidentDetails;
