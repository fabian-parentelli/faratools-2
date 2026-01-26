import { useState } from "react";
import PrintCopy from "./PrintCopy";
import PrintInputs from "./PrintInputs";
import PrintView from "./PrintView";

const PrintExt = () => {

    const [values, setValues] = useState({ color: '#094c90', size: '30px', position: 'top', bodyClass: 'divPrintA' });

    return (
        <div className="printExt flex-col">
            <h4 className="colaccent">Implementación</h4>

            <PrintCopy />
            <PrintInputs values={values} setValues={setValues} />
            <PrintView values={values} />
        </div>
    );
};

export default PrintExt;