import './popupTool.css';
import PopupExt from './PopupExt.jsx';
import PopupImport from './PopupImport.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const PopupTool = ({ setParams }) => {

    return (
        <div className="popupTool flex-col">
            <h2>Popup</h2>

            <section className='popupToolSect flex-col'>

                <div className='popupToolDiv flex-col'>
                    <PopupImport />
                    <PopupExt />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={200} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'progressbar' })}>ProgressBar</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltips</p>
            </section>
        </div>
    );
};

export default PopupTool;