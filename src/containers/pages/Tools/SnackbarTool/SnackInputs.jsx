import { Copy } from 'fara-comp-react';

const SnackInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="snackInputs">
            
            <div className='flex-col'>
                <Copy text='open' color='gray' />
                <select name="open" value={values?.open || ''} onChange={handlChange}>
                    <option value="false">false</option>
                    <option value="true">true</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='status' color='gray' />
                <select name="status" value={values?.status || ''} onChange={handlChange}>
                    <option value="success">success</option>
                    <option value="error">error</option>
                    <option value="info">info</option>
                    <option value="warning">warning</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='message' color='gray' />
                <select name="message" value={values?.message || ''} onChange={handlChange}>
                    <option value="Mensaje de éxito">Mensaje de éxito</option>
                    <option value="Mensaje de error">Mensaje de error</option>
                    <option value="Mensaje de info">Mensaje de info</option>
                    <option value="Mensaje de warning">Mensaje de warning</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='duration' color='gray' />
                <select name="duration" value={values?.duration || ''} onChange={handlChange}>
                    <option value="6000">6000</option>
                    <option value="4000">4000</option>
                    <option value="2000">2000</option>
                </select>
            </div>
        
        </div>
    );
};

export default SnackInputs;