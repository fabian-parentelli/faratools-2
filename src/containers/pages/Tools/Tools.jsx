import { useOutletContext } from 'react-router-dom';
import ToolsIntro from './ToolsIntro/ToolsIntro';
import TooltipsTool from './TooltipsTool/TooltipsTool';
import AutoComTool from './AutoComTool/AutoComTool';
import BadgeTool from './BadgeTool/BadgeTool';
import CharacterTool from './CharacterTool/CharacterTool';
import CheckBoxesTool from './CheckBoxesTool/CheckBoxesTool';

const Tools = () => {
    
    const { params, setParams } = useOutletContext();

    return (
        <>
            {params?.sect === 'intr' && <ToolsIntro setParams={setParams} />}   
            {params?.sect === 'autocomplete' && <AutoComTool setParams={setParams} />}   
            {params?.sect === 'badge' && <BadgeTool setParams={setParams} />}
            {params?.sect === 'character' && <CharacterTool setParams={setParams} />}
            {params?.sect === 'chebockses' && <CheckBoxesTool setParams={setParams} />}
            {params?.sect === 'tooltip' && <TooltipsTool setParams={setParams} />}
        </>
    );
};

export default Tools;