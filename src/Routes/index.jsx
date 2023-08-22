import { Routes, Route } from "react-router-dom";
import Landing from "./landing";
import NotFound from "pages/notFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Landing />} />
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default MainRoutes;
