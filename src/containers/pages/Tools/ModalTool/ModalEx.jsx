import { useState } from "react";
import ModalCopy from "./ModalCopy";
import ModalInputs from "./ModalInputs";
import ModalView from "./ModalView";

const ModalEx = () => {

    const [values, setValues] = useState({
        open: 'false',
        btn: 'true',
        btnName: 'Cerrar',
        btnBackColor: '#333',
        btnColor: '#EAEBEF',
        backgroundColor: '#EAEBEF'
    });

    return (
        <div className="modalEx flex-col">
            <h4 className="colaccent">Implementación</h4>
            <ModalCopy />
            <ModalInputs values={values} setValues={setValues} />
            <ModalView values={values} setValues={setValues} />
            <p className="pgray">Podemos pasar en onClose null y no podras cerrar el modal precionando fuera del mismo.</p>
        </div>
    );
};

export default ModalEx;