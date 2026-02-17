import './progressBar.css';
import ProgressBarrExt from './ProgressBarrExt.jsx';
import ProgressBarrPrint from './ProgressBarrPrint.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const ProgressBar = ({ setParams }) => {

    return (
        <div className="progressbar flex-col">
            <h2>ProgressBar</h2>

            <section className='progressbarSect flex-col'>

                <div className='progressbarDiv flex-col'>
                    <ProgressBarrPrint />
                    <ProgressBarrExt />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={350} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'print' })}>Print</p>
                <p onClick={() => setParams({ sect: 'popup' })}>Popup</p>
            </section>
        </div>
    );
};

export default ProgressBar;