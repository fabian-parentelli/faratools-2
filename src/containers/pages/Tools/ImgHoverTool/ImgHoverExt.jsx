import { useState } from "react";
import ImgHoverCopy from "./ImgHoverCopy.jsx";
import ImgHoverInputs from "./ImgHoverInputs.jsx";
import ImgHoverView from "./ImgHoverView.jsx";

const ImgHoverExt = () => {

    const [values, setValues] = useState({
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
        border: 'true',
        objectFit: 'contain',
        pointer: 'true'
    });

    return (
        <div className="imgHoverExt flex-col">
            <h4 className="colaccent">Implementación</h4>
            <ImgHoverCopy />
            <ImgHoverInputs values={values} setValues={setValues} />
            <ImgHoverView values={values} />
        </div>
    );
};

export default ImgHoverExt;