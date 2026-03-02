import './snackbarTool.css';
import SnackbarExp from './SnackbarExp.jsx';
import SnackbarImport from './SnackbarImport.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const SnackbarTool = ({ setParams }) => {

    return (
        <div className="snackbarTool flex-col">
            <h2>Snackbar</h2>

            <section className='snackbarToolSect'>

                <div className='snackbarToolDiv flex-col'>
                    <SnackbarImport />
                    <SnackbarExp />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={200} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'popup' })}>Popup</p>
                <p onClick={() => setParams({ sect: 'spinner' })}>Spinner</p>
            </section>
        </div>
    );
};

export default SnackbarTool;