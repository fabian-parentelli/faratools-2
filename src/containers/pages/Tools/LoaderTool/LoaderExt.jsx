import { useState } from "react";
import LoaderCopy from "./LoaderCopy";
import LoaderInputs from "./LoaderInputs";
import LoaderView from "./LoaderView";

const LoaderExt = () => {

    const [values, setValues] = useState({ loading: 'false', color: '#094c90', text: 'Texto opcional' });

    return (
        <div className="loaderExt flex-col">
            <h4 className="colaccent">Implementación</h4>
            <LoaderCopy />
            <LoaderInputs values={values} setValues={setValues} />
            <LoaderView values={values} setValues={setValues} />
            <p className="pgray">Para pruebas, una vez que presiones el botón el loader solo funcionara durante 3 segundos</p>
        </div>
    );
};

export default LoaderExt;