import './downPdfTool.css';
import DownPdfExt from './DownPdfExt.jsx';
import DownPdfImport from './DownPdfImport.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const DownPdfTool = ({ setParams }) => {

    return (
        <div className="downPdfTool flex-col">
            <h2>Down PDF</h2>

            <section className='downPdfToolSect'>
                
                <div className='flex-col downPdfToolDiv'>
                    <DownPdfImport />
                    <DownPdfExt />

                    <h4 className='colaccent'>Actualización</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={330} c={900} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'copy' })}>Copy</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltips</p>
            </section>
        </div>
    );
};

export default DownPdfTool;