import './loaderTool.css';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav';
import LoaderImport from './LoaderImport';
import LoaderExt from './LoaderExt';

const LoaderTool = ({ setParams }) => {

    return (
        <div className="loaderTool flex-col">
            <h2>Loader</h2>

            <section className='loaderToolSect'>

                <div className='loaderTooldiv flex-col'>
                    <LoaderImport />
                    <LoaderExt />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={320} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'imghover' })}>ImgHover</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltips</p>
            </section>
        </div>
    );
};

export default LoaderTool;