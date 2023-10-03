import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import ProjectParams from "../Pages/ParamsPages/ProjectParams";
const routes  = [
    { path:'/' , element:<Home />},
    { path:'/about' , element:<About />},
    { path:'/contact' , element:<Contact />},
    { path:'/projects' , element:<Projects />},
    { path:'/projectparams/:itemID' , element:<ProjectParams />}
]

export default routes