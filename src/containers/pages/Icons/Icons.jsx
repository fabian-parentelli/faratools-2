import IconPage from "./IconPage/IconPage";
import Imple from "./Imple/Imple";
import Import from "./Import/Import";
import { useOutletContext } from 'react-router-dom';

const Icons = () => {

    const { params, setParams } = useOutletContext();

    return (
        <>
            {params?.sect === 'import' && <Import setParams={setParams} />}
            {params?.sect === 'impl' && <Imple setParams={setParams} />}
            {params?.sect === 'icons' && <IconPage setParams={setParams} />}
        </>
    );
};

export default Icons;