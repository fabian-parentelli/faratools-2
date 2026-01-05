import { Copy } from 'fara-comp-react';

const DownPdfInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="downPdfInputs">
            
            <div className='flex-col'>
                <Copy text='text' color='gray' />
                <select name="url" value={values?.url || ''} onChange={handlChange}>
                    <option value="https://www.irs.gov/pub/irs-pdf/f1040.pdf">PDF 1</option>
                    <option value="https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf">PDF 2</option>
                    <option value="https://www.libreoffice.org/assets/Documents/tdf-manifesto.pdf">PDF 3</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='text' color='gray' />
                <select name="position" value={values?.position || ''} onChange={handlChange}>
                    <option value="top">top</option>
                    <option value="bottom">bottom</option>
                    <option value="right">right</option>
                    <option value="left">left</option>
                </select>
            </div>
            
            <div className='flex-col'>
                <Copy text='text' color='gray' />
                <select name="color" value={values?.color || ''} onChange={handlChange}>
                    <option value="#05A267">Verde</option>
                    <option value="#1465bb">Azul</option>
                    <option value="#ff9835">Naranja</option>
                    <option value="#e00000">Rojo</option>
                </select>
            </div>

        </div>
    );
};

export default DownPdfInputs;