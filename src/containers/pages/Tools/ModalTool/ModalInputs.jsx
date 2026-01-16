import { Copy } from 'fara-comp-react';

const ModalInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="modalInputs">

            <div className='flex-col'>
                <Copy text='open' color='gray' />
                <select name="open" value={values?.open || ''} onChange={handlChange}>
                    <option value={'true'}>true</option>
                    <option value='false'>false</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='btn' color='gray' />
                <select name="btn" value={values?.btn || ''} onChange={handlChange}>
                    <option value={'true'}>true</option>
                    <option value='false'>false</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='btnName' color='gray' />
                <select name="btnName" value={values?.btnName || ''} onChange={handlChange}>
                    <option value='Cerrar'>Cerrar</option>
                    <option value='Actualizar'>Actualizar</option>
                    <option value='Otro'>Otro</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='btnBackColor' color='gray' />
                <select name="btnBackColor" value={values?.btnBackColor || ''} onChange={handlChange}>
                    <option value='#124ECD'>#124ECD</option>
                    <option value='#659D72'>#659D72</option>
                    <option value='#FA4600'>#FA4600</option>
                    <option value='#333'>#333</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='btnColor' color='gray' />
                <select name="btnColor" value={values?.btnColor || ''} onChange={handlChange}>
                    <option value='white'>White</option>
                    <option value='black'>Black</option>
                    <option value='#EAEBEF'>#EAEBEF</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='backgroundColor' color='gray' />
                <select name="backgroundColor" value={values?.backgroundColor || ''} onChange={handlChange}>
                    <option value='#EAEBEF'>#EAEBEF</option>
                    <option value='#262325'>#262325</option>
                    <option value='#4E99A1'>#4E99A1</option>
                </select>
            </div>

        </div>
    );
};

export default ModalInputs;