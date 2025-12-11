import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/utils/ScrollToTop";
import NavBar from "../containers/layouts/NavBar/NavBar";
import Body from "../containers/Body/Body";
import Footer from "../containers/layouts/Footer/Footer";
import Pages from "../containers/pages/Pages";
import Doc from "../containers/pages/Doc/Doc";
import Icons from "../containers/pages/Icons/Icons";

const WrapRoutes = () => {
    
    return (
        <BrowserRouter>
            <ScrollToTop>

                <NavBar />

                <Routes>
                    <Route path="/" element={<Body />} />

                    <Route path="page" element={<Pages />}>
                        <Route path="doc" element={<Doc />} />
                        <Route path="icons" element={<Icons />} />
                    </Route>
                </Routes>

                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default WrapRoutes;