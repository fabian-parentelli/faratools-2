import './downPdfTool.css';
import DownPdfExt from './DownPdfExt.jsx';
import DownPdfImport from './DownPdfImport.jsx';
import DownPdfUpdate from './DownPdfUpdate.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const DownPdfTool = ({ setParams }) => {

    return (
        <div className="downPdfTool flex-col">
            <h2>Down PDF</h2>

            <section className='downPdfToolSect'>
                
                <div className='flex-col downPdfToolDiv'>
                    <DownPdfImport />
                    <DownPdfExt />
                    <DownPdfUpdate />
                </div>

                <TooltipNav b={330} c={900} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'copy' })}>Copy</p>
                <p onClick={() => setParams({ sect: 'imghover' })}>ImgHover</p>
            </section>
        </div>
    );
};

export default DownPdfTool;