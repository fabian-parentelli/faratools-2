import Imple from "./Imple/Imple";
import Import from "./Import/Import";
import { useOutletContext } from 'react-router-dom';

const Icons = () => {

    const { params, setParams } = useOutletContext();

    return (
        <>
            {params?.sect === 'import' && <Import setParams={setParams} />}
            {params?.sect === 'impl' && <Imple />}
        </>
    );
};

export default Icons;