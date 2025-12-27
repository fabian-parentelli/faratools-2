import './badgeTool.css';
import { Copy } from 'fara-comp-react';

const BadgeToolInputs = ({ values, setValues }) => {

    const handlChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="badgeToolInputs">

            <div className='flex-col'>
                <Copy text='type' color='gray' />
                <select name="type" value={values?.type || ''} onChange={handlChange}>
                    <option value="app">app</option>
                    <option value="user">user</option>
                    <option value="email">email</option>
                    <option value="folder">folder</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='name' color='gray' />
                <select name="name" value={values?.name || ''} onChange={handlChange}>
                    <option value="0">0</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='backgroundColor' color='gray' />
                <select name="backgroundColor" value={values?.backgroundColor || ''} onChange={handlChange}>
                    <option value="#00a67e">#00a67e</option>
                    <option value="#166CCF">#166CCF</option>
                    <option value="#F9193B">#F9193B</option>
                    <option value="#082032">#082032</option>
                </select>
            </div>

            <div className='flex-col'>
                <Copy text='size' color='gray' />
                <select name="size" value={values?.size || ''} onChange={handlChange}>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                </select>
            </div>

        </div>
    );
};

export default BadgeToolInputs;