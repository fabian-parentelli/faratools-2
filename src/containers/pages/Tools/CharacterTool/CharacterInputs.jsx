import { Copy } from 'fara-comp-react';

const CharacterInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="characterInputs">

            <section className='characterInputsSect'>

                <div className='flex-col'>
                    <Copy text='min' color='gray' />
                    <select name="min" value={values?.min || ''} onChange={handlChange}>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                </div>

                <div className='flex-col'>
                    <Copy text='max' color='gray' />
                    <select name="max" value={values?.max || ''} onChange={handlChange}>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                    </select>
                </div>

            </section>

            <div className='flex-col'>
                <Copy text='text' color='gray' />
                <textarea name='text' value={values?.text || ''} onChange={handlChange} />
            </div>          

        </div>
    );
};

export default CharacterInputs;