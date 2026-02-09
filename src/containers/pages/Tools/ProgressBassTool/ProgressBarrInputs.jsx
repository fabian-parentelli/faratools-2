import { Copy } from 'fara-comp-react';

const ProgressBarrInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="progressBarrInputs">

            <div className='flex-col'>
                <Copy text='background' color='gray' />
                <select name="color" value={values?.color || ''} onChange={handlChange}>
                    <option value="#094c90">#094c90</option>
                    <option value="#90091d">#90091d</option>
                    <option value="#4E9F3D">#4E9F3D</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='active' color='gray' />
                <select name="active" value={values?.active || ''} onChange={handlChange}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </div>

        </div>
    );
};

export default ProgressBarrInputs;