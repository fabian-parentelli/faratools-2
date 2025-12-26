import './tooltipsTool.css';
import TooltipNav from './TooltipNav/TooltipNav';
import TooltipImp from './TooltipImp/TooltipImp';
import TooltipImpl from './TooltipImpl/Tooltipimpl';

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

                <TooltipNav />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'autocomplete' })}>AutoComplete</p>
                <p onClick={() => setParams({ sect: 'autocomplete' })}>otro</p>
            </section>
        </div>
    );
};

export default TooltipsTool;