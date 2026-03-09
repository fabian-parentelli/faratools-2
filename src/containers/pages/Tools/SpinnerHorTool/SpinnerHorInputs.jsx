import { Copy } from 'fara-comp-react';

const SpinnerHorInputs = ({ values, setValues }) => {

    return (
        <div className="spinnerHorInputs">

            <div className='flex-col'>
                <Copy text='color' color='gray' />
                <select name="color" value={values || 'white'} onChange={(e) => setValues(e.target.value)}>
                    <option value="white">White</option>
                    <option value="#094c90">#094c90</option>
                    <option value="#90091d">#90091d</option>
                    <option value="#4E9F3D">#4E9F3D</option>
                </select>
            </div>

        </div>
    );
};

export default SpinnerHorInputs;