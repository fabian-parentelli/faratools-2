import { Copy } from 'fara-comp-react';

const ImgHoverInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="downPdfInputs">

            <div className='flex-col'>
                <Copy text='img' color='gray' />
                <select name="img" value={values?.img || ''} onChange={handlChange}>
                    <option value="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png">Google</option>
                    <option value="https://upload.wikimedia.org/wikipedia/commons/f/fe/Logo_Adidas.png">Adidas</option>
                    <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8xvtZmUYybGVIj_UY9SvS4fqfLGEHNsvxg&s">Rampla Jr.</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='border' color='gray' />
                <select name="border" value={values?.border || ''} onChange={handlChange}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='objectFit' color='gray' />
                <select name="objectFit" value={values?.objectFit || ''} onChange={handlChange}>
                    <option value="contain">contain</option>
                    <option value="cover">cover</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='pointer' color='gray' />
                <select name="pointer" value={values?.pointer || ''} onChange={handlChange}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </div>

        </div>
    );
};

export default ImgHoverInputs;