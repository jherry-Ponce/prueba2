import { Routes, Route } from "react-router-dom";
import { FormLogin } from "../Tienda/Components/Login/Lopgin/FormLogin";
import { FromRegistrol } from "../Tienda/Components/Login/Register/FormRegistrol";
import { RouterTienda } from "../Tienda/router/RouterTienda";

export const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<FormLogin/>} />
        <Route path="register" element={<FromRegistrol/>}/>
       
        <Route path="/*" element={<RouterTienda />}/>
      </Routes>
    </>
  );
};
