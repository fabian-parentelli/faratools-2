import './tooltipsTool.css';
import TooltipNav from './TooltipNav/TooltipNav.jsx';
import TooltipImp from './TooltipImp/TooltipImp.jsx';
import TooltipImpl from './TooltipImpl/Tooltipimpl.jsx';

const TooltipsTool = ({ setParams }) => {

    return (
        <div className="tooltipsTool">
            <h2>Tooltips</h2>

            <section className='tooltipsToolSect'>

                <div className='tooltipsToolSectDiv'>
                    <TooltipImp />
                    <TooltipImpl />
                    <h4 id='tooltipUpdate'>Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav c={900} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'copy' })}>Copy</p>
                <p onClick={() => setParams({ sect: '' })}></p>
            </section>
        </div>
    );
};

export default TooltipsTool;