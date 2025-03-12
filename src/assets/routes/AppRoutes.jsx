import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Registro from "../pages/Registro";

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/registro" element={<Registro/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;