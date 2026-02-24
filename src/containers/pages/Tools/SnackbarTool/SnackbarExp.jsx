import { useState } from "react";
import SnackInputs from "./SnackInputs.jsx";
import SnackbarView from "./SnackbarView.jsx";
import SnackbarPrint from "./SnackbarPrint.jsx";

const SnackbarExp = () => {

    const [values, setValues] = useState({
        open: 'false', status: 'success', message: 'Mensaje de éxito', duration: '4000'
    });

    return (
        <div className="flex-col">
            <h4 className="colaccent">Implementación</h4>

            <SnackbarPrint />
            <SnackInputs values={values} setValues={setValues} />
            <SnackbarView values={values} setValues={setValues} />
        </div>
    );
};

export default SnackbarExp;