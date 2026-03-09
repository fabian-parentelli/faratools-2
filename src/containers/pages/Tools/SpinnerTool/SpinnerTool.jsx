import './spinnerTool.css';
import SpinnerExp from './SpinnerExp.jsx';
import SpinnerImport from './SpinnerImport.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const SpinnerTool = ({ setParams }) => {

    return (
        <div className="spinnerTool flex-col">
            <h2>Spinner</h2>

            <section className='spinnerToolSect'>

                <div className='spinnerToolDiv flex-col'>
                    <SpinnerImport />
                    <SpinnerExp />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={200} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'snackbar' })}>Snackbar</p>
                <p onClick={() => setParams({ sect: 'spinnerh' })}>SpinnerH</p>
            </section>
        </div>
    );
};

export default SpinnerTool;