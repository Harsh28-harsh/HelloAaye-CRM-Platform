import {
  Routes,
  Route
} from "react-router-dom";


import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";


function App(){

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />


      <Route
        path="/admin"
        element={<AdminDashboard />}
      />


      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

  );

}


export default App;