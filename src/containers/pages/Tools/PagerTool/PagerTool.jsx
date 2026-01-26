import './pagerTool.css';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';
import PagerImport from './PagerImport.jsx';
import PagerExt from './PagerExt.jsx';

const PagerTool = ({ setParams }) => {

    return (
        <div className="pagerTool flex-col">
            <h2>Pager</h2>

            <section className='pagerToolSect'>

                <div className='pagerToolDiv flex-col'>
                    <PagerImport />
                    <PagerExt />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={350} c={900} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'modal' })}>Modal</p>
                <p onClick={() => setParams({ sect: 'print' })}>Print</p>
            </section>
        </div>
    );
};

export default PagerTool;