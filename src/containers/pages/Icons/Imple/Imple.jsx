import './imple.css';
import { useState } from 'react';
import { Icons } from 'fara-comp-react';
import ImpleIcon from './ImpleIcon.jsx';
import ImpleView from './ImpleView.jsx';
import ImpleInputs from './ImpleInputs.jsx';

const Imple = ({ setParams }) => {

    const [values, setValus] = useState({
        color: 'white', size: '50px', onClick: 'alert', backCol: 'none', bold: 2, type: 'app', hover: 'false'
    });

    return (
        <div className="imple">
            <h2>Implementación</h2>

            <ImpleIcon />
            <ImpleInputs values={values} setValus={setValus} />

            <section className='inpleSect'>
                <ImpleView values={values} />

                <div className='inpleSectDic'>
                    <Icons
                        color={values?.color || 'white'}
                        size={values?.size || '50px'}
                        onClick={() => alert(values?.onClick || 'alert')}
                        bold={values?.bold || 2}
                        type={values?.type || 'app'}
                        hover={values?.hover === 'true' ? true : false}
                    />
                </div>
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'import' })}>Importación</p>
                <p onClick={() => setParams({ sect: 'icons' })}>Icons</p>
            </section>
        </div>
    );

};

export default Imple;