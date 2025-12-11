import Install from "./Install/Install";
import Intro from "./Intro/Intro";
import { useOutletContext } from 'react-router-dom';

const Doc = () => {

    const { params, setParams } = useOutletContext();

    return (
        <>
            {params?.sect === 'intr' && <Intro setParams={setParams} />}
            {params?.sect === 'inst' && <Install setParams={setParams} />}
        </>
    );
};

export default Doc;