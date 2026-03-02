import { Copy } from 'fara-comp-react';

const SpinnerInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="spinnerInputs">

            <div className='flex-col'>
                <Copy text='color' color='gray' />
                <select name="color" value={values?.color || ''} onChange={handlChange}>
                    <option value="#094c90">#094c90</option>
                    <option value="#90091d">#90091d</option>
                    <option value="#4E9F3D">#4E9F3D</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='size' color='gray' />
                <select name="size" value={values?.size || ''} onChange={handlChange}>
                    <option value="36px">36px</option>
                    <option value="72px">72px</option>
                    <option value="108px">108px</option>
                </select>
            </div>
            
        </div>
    );
};

export default SpinnerInputs;