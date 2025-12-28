import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/utils/ScrollToTop";
import NavBar from "../containers/layouts/NavBar/NavBar";
import Body from "../containers/Body/Body";
import Footer from "../containers/layouts/Footer/Footer";
import Pages from "../containers/pages/Pages";
import Doc from "../containers/pages/Doc/Doc";
import Icons from "../containers/pages/Icons/Icons";
import Tools from "../containers/pages/Tools/Tools";
import WorkSpace from "../containers/layouts/WorkSpace/WorkSpace";
import Version from "../containers/layouts/Version/Version";

const WrapRoutes = () => {

    return (
        <BrowserRouter basename="/faratools-2">
            <ScrollToTop>

                <NavBar />

                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="*" element={<WorkSpace />} />
                    <Route path="/version" element={<Version />} />

                    <Route path="page" element={<Pages />}>
                        <Route path="doc" element={<Doc />} />
                        <Route path="icons" element={<Icons />} />
                        <Route path="tools" element={<Tools />} />
                    </Route>
                </Routes>

                <Footer />

            </ScrollToTop>
        </BrowserRouter>
    );
};

export default WrapRoutes;