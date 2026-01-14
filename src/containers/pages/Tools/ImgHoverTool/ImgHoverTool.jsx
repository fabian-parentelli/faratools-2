import './imgHoverTool.css';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';
import ImgHoverImport from './ImgHoverImport.jsx';
import ImgHoverExt from './ImgHoverExt.jsx';

const ImgHoverTool = ({ setParams }) => {

    return (
        <div className="imgHoverTool flex-col">
            <h2>ImgHover</h2>

            <section className='imgHoverToolSect'>

                <div className='imgHoverToolDiv flex-col'>
                    <ImgHoverImport />
                    <ImgHoverExt />

                    <h4 className='colaccent'>Actualización</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={320} c={750} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'downpdf' })}>Down PDF</p>
                <p onClick={() => setParams({ sect: 'loader' })}>Loader</p>
            </section>
        </div>
    );
};

export default ImgHoverTool;