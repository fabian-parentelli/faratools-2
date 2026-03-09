import './spinnerHorTool.css';
import SpinnerHorExp from './SpinnerHorExp.jsx';
import SpinnerHorImport from './SpinnerHorImport.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const SpinnerHorTool = ({ setParams }) => {

    return (
        <div className="spinnerHorTool flex-col">
            <h2>SpinnerH</h2>

            <section className="spinnerHorToolSect">

                <div className="spinnerHorToolDiv flex-col">
                    <SpinnerHorImport />
                    <SpinnerHorExp />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'spinner' })}>Spinner</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltip</p>
            </section>
        </div>
    );
};

export default SpinnerHorTool;