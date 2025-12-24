import './tooltipsTool.css';
import TooltipNav from './TooltipNav/TooltipNav';
import TooltipImp from './TooltipImp/TooltipImp';
import TooltipImpl from './TooltipImpl/Tooltipimpl';

const TooltipsTool = () => {

    return (
        <div className="tooltipsTool">
            <h2>Tooltips</h2>

            <section className='tooltipsToolSect'>

                <div className='tooltipsToolSectDiv'>
                    <TooltipImp />
                    <TooltipImpl />
                </div>

                <TooltipNav />
            </section>

        </div>
    );
};

export default TooltipsTool;