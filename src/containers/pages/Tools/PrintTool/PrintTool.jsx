import './printTool.css';
import PrintExt from './PrintExt.jsx';
import PrintImport from './PrintImport.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const PrintTool = ({ setParams }) => {

    return (
        <div className="printTool flex-col">
            <h2>Print</h2>

            <section className='printToolSect'>

                <div className='printToolDiv flex-col'>
                    <PrintImport />
                    <PrintExt />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={200} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'pager' })}>Pager</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltip</p>
            </section>
        </div>
    );
};

export default PrintTool;