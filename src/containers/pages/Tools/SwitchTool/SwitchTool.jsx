import './switchTool.css';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';
import SwitchImport from './SwitchImport.jsx';
import SwitchExp from './SwitchExp.jsx';

const SwitchTool = ({ setParams }) => {

    return (
        <div className="switchTool flex-col">
            <h2>Switch</h2>

            <section className="switchToolSect">

                <div className="switchToolDiv flex-col">
                    <SwitchImport />
                    <SwitchExp />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'spinnerh' })}>SpinnerH</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltip</p>
            </section>
        </div>
    );
};

export default SwitchTool;