import { useState } from "react";
import DownPdfCopy from "./DownPdfCopy";
import DownPdfInputs from "./DownPdfInputs";
import DownPdfView from "./DownPdfView";

const DownPdfExt = () => {

    const [values, setValues] = useState({
        url: 'https://www.irs.gov/pub/irs-pdf/f1040.pdf',
        position: 'top',
        color: '#05A267'
    });

    return (
        <div className="flex-col">
            <h4 className="colaccent">Implementación</h4>
            <DownPdfCopy />
            <DownPdfInputs values={values} setValues={setValues} />
            <DownPdfView values={values} />
        </div>
    );
};

export default DownPdfExt;