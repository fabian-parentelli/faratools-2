import { Copy } from 'fara-comp-react';

const LoaderInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="loaderInputs">
            
            <div className='flex-col'>
                <Copy text='loading' color='gray' />
                <select name="loading" value={values?.loading || ''} onChange={handlChange}>
                    <option value={'true'}>true</option>
                    <option value='false'>false</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='color' color='gray' />
                <select name="color" value={values?.color || ''} onChange={handlChange}>
                    <option value="#094c90">#094c90</option>
                    <option value="#90091d">#90091d</option>
                    <option value="#4E9F3D">#4E9F3D</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='text' color='gray' />
                <select name="text" value={values?.text || ''} onChange={handlChange}>
                    <option value="Texto opcional">Texto opcional</option>
                    <option value="Otro texto">Otro texto</option>
                    <option value="">Sin texto</option>
                </select>
            </div>
            
        </div>
    );
};

export default LoaderInputs;