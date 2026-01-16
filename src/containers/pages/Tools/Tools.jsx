import { useOutletContext } from 'react-router-dom';
import ToolsIntro from './ToolsIntro/ToolsIntro';
import TooltipsTool from './TooltipsTool/TooltipsTool';
import AutoComTool from './AutoComTool/AutoComTool';
import BadgeTool from './BadgeTool/BadgeTool';
import CharacterTool from './CharacterTool/CharacterTool';
import CheckBoxesTool from './CheckBoxesTool/CheckBoxesTool';
import CloudFileTools from './CloudFileTools/CloudFileTools';
import CopyTools from './CopyTools/CopyTools';
import DownPdfTool from './DownPdfTool/DownPdfTool';
import ImgHoverTool from './ImgHoverTool/ImgHoverTool';
import LoaderTool from './LoaderTool/LoaderTool';
import ModalTool from './ModalTool/ModalTool';

const Tools = () => {
    
    const { params, setParams } = useOutletContext();

    return (
        <>
            {params?.sect === 'intr' && <ToolsIntro setParams={setParams} />}   
            {params?.sect === 'autocomplete' && <AutoComTool setParams={setParams} />}   
            {params?.sect === 'badge' && <BadgeTool setParams={setParams} />}
            {params?.sect === 'character' && <CharacterTool setParams={setParams} />}
            {params?.sect === 'chebockses' && <CheckBoxesTool setParams={setParams} />}
            {params?.sect === 'cloudfile' && <CloudFileTools setParams={setParams} />}
            {params?.sect === 'copy' && <CopyTools setParams={setParams} />}
            {params?.sect === 'downpdf' && <DownPdfTool setParams={setParams} />}
            {params?.sect === 'imghover' && <ImgHoverTool setParams={setParams} />}
            {params?.sect === 'loader' && <LoaderTool setParams={setParams} />}
            {params?.sect === 'modal' && <ModalTool setParams={setParams} />}
            {params?.sect === 'tooltip' && <TooltipsTool setParams={setParams} />}
        </>
    );
};

export default Tools;