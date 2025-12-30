import { useState } from "react";
import CheckBoxView from "./CheckBoxView.jsx";
import CheckBoxCopy from "./CheckBoxCopy.jsx";
import CheckBoxInputs from "./CheckBoxInputs.jsx";
import AutoComExArray from "../AutoComTool/AutoComExecute/AutoComExArray/AutoComExArray.jsx";

const CheckBoxExt = () => {

    const [values, setValues] = useState({
        labels: 'fruts', multiSelect: 'true', direction: 'row', accentColor: '#00a67e'
    });

    return (
        <div className="flex-col">
            <h4 className="colaccent">Implementación</h4>
            <CheckBoxCopy />
            <CheckBoxInputs values={values} setValues={setValues} />
            <AutoComExArray isName={true} />
            <CheckBoxView values={values} />

            <div className="checkBoxesProps">
                <p><strong style={{ color: '#b5b5b5' }}>labels:</strong> array de opciones que se muestran como checkboxes.</p>
                <p><strong style={{ color: '#b5b5b5' }}>selecteds:</strong> elementos seleccionados por defecto.</p>
                <p><strong style={{ color: '#b5b5b5' }}>multiSelect:</strong> permite seleccionar múltiples opciones.</p>
                <p><strong style={{ color: '#b5b5b5' }}>direction:</strong> define la orientación del listado (row / column).</p>
                <p><strong style={{ color: '#b5b5b5' }}>setType:</strong> función callback que retorna las selecciones.</p>
                <p><strong style={{ color: '#b5b5b5' }}>accentColor:</strong> color principal del componente.</p>
            </div>

        </div>
    );

};

export default CheckBoxExt;