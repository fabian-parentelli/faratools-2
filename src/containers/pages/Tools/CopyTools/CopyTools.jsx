import './copyTools.css';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';
import CopyToolsImp from './CopyToolsImp.jsx';
import CopyToolsExp from './CopyToolsExp.jsx';

const CopyTools = ({ setParams }) => {

    return (
        <div className="copyTools flex-col">
            <h2>Copy</h2>

            <section className='copyToolsSect'>

                <div className='copyToolsSectDiv flex-col'>
                    <CopyToolsImp />
                    <CopyToolsExp />
                </div>

                <TooltipNav b={350} c={750} />
            </section>

            <h4 className='colaccent'>Actualización</h4>
            <p>Versión origial</p>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'cloudfile' })}>Cloudfile</p>
                <p onClick={() => setParams({ sect: 'downpdf' })}>DownPdf</p>
            </section>
        </div>
    );
};

export default CopyTools;