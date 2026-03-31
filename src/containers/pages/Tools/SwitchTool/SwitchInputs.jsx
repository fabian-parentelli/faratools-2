import { Copy } from 'fara-comp-react';

const SwitchInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="spinnerHorInputs">

            <div className='flex-col'>
                <Copy text='activeColor' color='gray' />
                <select name="activeColor" value={values?.activeColor || ''} onChange={handlChange}>
                    <option value="#094c90">#094c90</option>
                    <option value="#90091d">#90091d</option>
                    <option value="#4E9F3D">#4E9F3D</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='label' color='gray' />
                <select name="label" value={values?.label || ''} onChange={handlChange}>
                    <option value="label-1">label-1</option>
                    <option value="label-2">label-2</option>
                    <option value="none" style={{ color: '#EF4444' }}>Sin label</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='statusFalse' color='gray' />
                <select name="statusFalse" value={values?.statusFalse || ''} onChange={handlChange}>
                    <option value="Inactivo">Inactivo</option>
                    <option value="NO">NO</option>
                </select>
            </div>
           
            <div className='flex-col'>
                <Copy text='statusTrue' color='gray' />
                <select name="statusTrue" value={values?.statusTrue || ''} onChange={handlChange}>
                    <option value="Activo">Activo</option>
                    <option value="SI">SI</option>
                </select>
            </div>

        </div>
    );
};

export default SwitchInputs;