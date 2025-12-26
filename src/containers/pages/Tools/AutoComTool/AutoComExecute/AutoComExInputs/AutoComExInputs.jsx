import './autoComExInputs.css';
import { Copy } from "fara-comp-react";

const AutoComExInputs = ({ values, setValues, setKey }) => {

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setKey(Date.now());
    };

    return (
        <div className="autoComExInputs">

            <div>
                <Copy text='options' color='gray' size='14px' />
                <select name="options" value={values?.options || ''} onChange={handleChange}>
                    <option value="fruts">fruts</option>
                    <option value="users">users</option>
                </select>
            </div>

            <div>
                <Copy text='labelKey' color='gray' size='14px' />
                <select name="labelKey" value={values?.labelKey || ''} onChange={handleChange}>
                    <option value="label">label</option>
                    <option value="name">name</option>
                </select>
            </div>

            <div>
                <Copy text='width' color='gray' size='14px' />
                <select name="width" value={values?.width || ''} onChange={handleChange}>
                    <option value="200px">200px</option>
                    <option value="300px">300px</option>
                    <option value="400px">400px</option>
                </select>
            </div>

            <div>
                <Copy text='height' color='gray' size='14px' />
                <select name="height" value={values?.height || ''} onChange={handleChange}>
                    <option value="20px">20px</option>
                    <option value="30px">30px</option>
                    <option value="40px">40px</option>
                </select>
            </div>

            <div>
                <Copy text='placeholder' color='gray' size='14px' />
                <select name="placeholder" value={values?.placeholder || ''} onChange={handleChange}>
                    <option value="Encontrar frutas">Encontrar frutas</option>
                    <option value="Buscar usuarios">Buscar usuarios</option>
                </select>
            </div>

        </div>
    );
};

export default AutoComExInputs;