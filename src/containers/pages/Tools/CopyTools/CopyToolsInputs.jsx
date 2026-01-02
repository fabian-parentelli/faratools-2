import { Copy } from 'fara-comp-react';

const CopyToolsInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="copyToolsInputs">
            
            <div className='flex-col'>
                <Copy text='text' color='gray' />
                <select name="text" value={values?.text || ''} onChange={handlChange}>
                    <option value="Texto 1">Texto 1</option>
                    <option value="Texto 2">Texto 2</option>
                    <option value="Texto 3">Texto 3</option>
                    <option value="Texto 4">Texto 4</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='size' color='gray' />
                <select name="size" value={values?.size || ''} onChange={handlChange}>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='color' color='gray' />
                <select name="color" value={values?.color || ''} onChange={handlChange}>
                    <option value="#00a67e">#00a67e</option>
                    <option value="#793AF1">#793AF1</option>
                    <option value="#3E88DA">#3E88DA</option>
                    <option value="#006414">#006414</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='duration' color='gray' />
                <select name="duration" value={values?.duration || ''} onChange={handlChange}>
                    <option value="4000">4000</option>
                    <option value="3000">3000</option>
                    <option value="2000">2000</option>
                    <option value="1000">1000</option>
                </select>
            </div>

        </div>
    );
};

export default CopyToolsInputs;