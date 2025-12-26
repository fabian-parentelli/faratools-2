import './autoComExecute.css';
import { useState } from 'react';
import AutoComExInputs from './AutoComExInputs/AutoComExInputs';
import AutoComExIcon from './AutoComExIcon/AutoComExIcon';
import AutoComExArray from './AutoComExArray/AutoComExArray';
import AutoComExCode from './AutoComExCode/AutoComExCode';

const AutoComExecute = () => {

    const [key, setKey] = useState(Date.now());

    const [values, setValues] = useState({
        options: 'fruts', labelKey: 'label', width: '200px', height: '30px', placeholder: 'Encontrar frutas'
    });

    return (
        <div className="autoComExecute">
            <h4>Implementación</h4>
            <AutoComExIcon />
            <AutoComExInputs values={values} setValues={setValues} setKey={setKey} />
            <AutoComExArray />
            <AutoComExCode values={values} keys={key} />

            <section className='autoComExecutePP'>
                <p><strong>options</strong>: Array de objetos con las opciones disponibles para seleccionar. Cada objeto debe tener un identificador único y un campo que se mostrará como texto.</p>
                <p><strong>labelKey</strong>: Nombre de la propiedad que se mostrará en el input, por ejemplo 'label' o 'name'.</p>
                <p><strong>setData</strong>: Función que recibe el elemento seleccionado, permitiendo actualizar el estado en el componente padre.</p>
                <p><strong>style</strong>: Objeto con estilos personapzados para el input, como ancho, alto y placeholder.</p>
                <p><strong>selectedId</strong>: Id del elemento que estará seleccionado por defecto. Si no hay selección, se puede pasar null.</p>
            </section>

        </div>
    );
};

export default AutoComExecute;