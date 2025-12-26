import './tooltipImpl.css';
import { useState } from 'react';
import { Tooltip, Icons } from "fara-comp-react";
import TooltipCode from './TooltipCode/TooltipCode.jsx';
import TooltipInputs from './ToolttipInputs/TooltipInputs.jsx';
import TooltipIcon from './TooltipIcon/TooltipIcon.jsx';

const TooltipImpl = () => {

    const [values, setValues] = useState({
        text: 'Tooltip', position: 'top', backgroundColor: '#00a67e', color: 'white', cursor: 'pointer'
    });

    return (
        <div id="tooltipImpl">
            <h4>Implementación</h4>
            <TooltipIcon />
            <TooltipInputs values={values} setValues={setValues} />

            <section className='tooltipImplSect'>
                <TooltipCode values={values} />

                <div className='tooltipImplSectDiv'>
                    <Tooltip
                        text={values.text || 'Tooltip'}
                        position={values.position || 'top'}
                        backgroundColor={values.backgroundColor || '#00a67e'}
                        color={values.color || 'white'}
                        cursor={values.cursor || 'pointer'}
                    >
                        <Icons color='white' size='50px' />
                    </Tooltip>
                </div>
            </section>
        </div>
    );
};

export default TooltipImpl;