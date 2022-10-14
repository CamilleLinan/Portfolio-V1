import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import ProjectPage from "../../pages/ProjectPage";

const IndexRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/project/:id' element={<ProjectPage />}/>
                <Route path='*' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;