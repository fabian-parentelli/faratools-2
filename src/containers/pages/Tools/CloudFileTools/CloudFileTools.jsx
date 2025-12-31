import './cloudFileTools.css';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';
import CloudFileImport from './CloudFileImport.jsx';
import CloudFileExt from './CloudFileExt.jsx';
import CloudFileUpdate from './CloudFileUpdate.jsx';

const CloudFileTools = ({ setParams }) => {

    return (
        <div className="cloudFileTools">
            <h2>CloudFile</h2>

            <section className='cloudFileToolsSect'>

                <div className='cloudFileToolsDiv'>
                    <CloudFileImport />
                    <CloudFileExt />
                    <CloudFileUpdate />
                </div>

                <TooltipNav b={380} c={1150} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'chebockses' })}>CheckBoxes</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tootips</p>
            </section>
        </div>
    );
};

export default CloudFileTools;