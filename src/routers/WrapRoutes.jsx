import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/utils/ScrollToTop";
import NavBar from "../containers/layouts/NavBar/NavBar";
import Body from "../containers/Body/Body";
import Footer from "../containers/layouts/Footer/Footer";

const WrapRoutes = () => {
    
    return (
        <BrowserRouter>
            <ScrollToTop>

                <NavBar />

                <Routes>
                    <Route path="/" element={<Body />} />
                </Routes>

                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default WrapRoutes;