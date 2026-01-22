import { Copy } from 'fara-comp-react';

const PagerInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="pagerInputs">
            
            <div className='flex-col'>
                <Copy text='backgroundColor' color='gray' />
                <select name="backgroundColor" value={values?.backgroundColor || ''} onChange={handlChange}>
                    <option value="#094c90">#094c90</option>
                    <option value="#90091d">#90091d</option>
                    <option value="#4E9F3D">#4E9F3D</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='top' color='gray' />
                <select name="top" value={values?.top || ''} onChange={handlChange}>
                    <option value={'true'}>true</option>
                    <option value='false'>false</option>
                </select>
            </div>
        
        </div>
    );
};

export default PagerInputs;