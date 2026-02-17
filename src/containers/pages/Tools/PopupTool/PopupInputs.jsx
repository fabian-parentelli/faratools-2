import { Copy } from 'fara-comp-react';

const PopupInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="popupInputs">

            <div className='flex-col'>
                <Copy text='text' color='gray' />
                <select name="text" value={values?.text || ''} onChange={handlChange}>
                    <option value="Usuario">Usuario</option>
                    <option value="Producto">Producto</option>
                    <option value="Evento">Evento</option>
                    <option value="">Ninguno</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='icon' color='gray' />
                <select name="icon" value={values?.icon || ''} onChange={handlChange}>
                    <option value="user">Usuario</option>
                    <option value="bike">Producto</option>
                    <option value="ticket">Evento</option>
                    <option value="">Ninguno</option>
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
                <Copy text='size' color='gray' />
                <select name="size" value={values?.size || ''} onChange={handlChange}>
                    <option value="12px">12px</option>
                    <option value="20px">20px</option>
                    <option value="30px">30px</option>
                    <option value="40px">40px</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='width' color='gray' />
                <select name="width" value={values?.width || ''} onChange={handlChange}>
                    <option value="60px">60px</option>
                    <option value="120px">120px</option>
                    <option value="250px">250px</option>
                    <option value="300px">300px</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='position' color='gray' />
                <select name="position" value={values?.position || ''} onChange={handlChange}>
                    <option value="r">right</option>
                    <option value="l">left</option>
                    <option value="t">top</option>
                    <option value="b">bottom</option>
                    <option value="lt">left-top</option>
                    <option value="rt">right-top</option>
                    <option value="lb">left-bottom</option>
                    <option value="rb">right-bottom</option>
                </select>
            </div>

        </div>
    );
};

export default PopupInputs;