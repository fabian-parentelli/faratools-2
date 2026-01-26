import { Copy } from 'fara-comp-react';

const PrintInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="printInputs">

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
                    <option value="30px">30px</option>
                    <option value="50px">50px</option>
                    <option value="60px">60px</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='position' color='gray' />
                <select name="position" value={values?.position || ''} onChange={handlChange}>
                    <option value="top">top</option>
                    <option value="bottom">bottom</option>
                    <option value="left">left</option>
                    <option value="right">right</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='bodyClass' color='gray' />
                <select name="bodyClass" value={values?.bodyClass || ''} onChange={handlChange}>
                    <option value="divPrintA">divPrintA</option>
                    <option value="divPrintB">divPrintB</option>
                    <option value="divPrintC">divPrintC</option>
                </select>
            </div>

        </div>
    );
};

export default PrintInputs;