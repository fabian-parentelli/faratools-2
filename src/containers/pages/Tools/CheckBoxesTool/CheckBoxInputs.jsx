import { Copy } from 'fara-comp-react';

const CheckBoxInputs = ({ values, setValues }) => {

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="checkBoxInputs">
            
            <div>
                <Copy text='labels' color='gray' size='14px' />
                <select name="labels" value={values?.labels || ''} onChange={handleChange}>
                    <option value="fruts">fruts</option>
                    <option value="users">users</option>
                </select>
            </div>
            
            <div>
                <Copy text='multiSelect' color='gray' size='14px' />
                <select name="multiSelect" value={values?.multiSelect || ''} onChange={handleChange}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </div>
            
            <div>
                <Copy text='direction' color='gray' size='14px' />
                <select name="direction" value={values?.direction || ''} onChange={handleChange}>
                    <option value="row">row</option>
                    <option value="column">column</option>
                </select>
            </div>
            
            <div>
                <Copy text='accentColor' color='gray' size='14px' />
                <select name="accentColor" value={values?.accentColor || ''} onChange={handleChange}>
                    <option value="#00a67e">#00a67e</option>
                    <option value="#166CCF">#166CCF</option>
                    <option value="#F9193B">#F9193B</option>
                    <option value="#082032">#082032</option>
                </select>
            </div>
        
        </div>
    );
};

export default CheckBoxInputs;