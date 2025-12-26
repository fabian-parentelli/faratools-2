import { useOutletContext } from 'react-router-dom';
import ToolsIntro from './ToolsIntro/ToolsIntro';
import TooltipsTool from './TooltipsTool/TooltipsTool';
import AutoComTool from './AutoComTool/AutoComTool';

const Tools = () => {
    
    const { params, setParams } = useOutletContext();

    return (
        <>
            {params?.sect === 'intr' && <ToolsIntro setParams={setParams} />}   
            {params?.sect === 'autocomplete' && <AutoComTool setParams={setParams} />}   
            {params?.sect === 'tooltip' && <TooltipsTool setParams={setParams} />}   
        </>
    );
};

export default Tools;