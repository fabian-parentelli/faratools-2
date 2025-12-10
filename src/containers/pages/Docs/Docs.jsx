import './docs.css';
import { useEffect } from 'react';
import Sider from './Sider/Sider.jsx';
import Intro from './models/Intro/Intro.jsx';
import { useQueryParams } from '../../../hooks/useQueryParams.jsx';
import Install from './models/Install/Install.jsx';

const Docs = () => {

    const [params, setParams] = useQueryParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [params.sect]);

    return (
        <div className="docs">
            <Sider params={params} setParams={setParams} />

            {params.sect === 'intr' && <Intro setParams={setParams} />}
            {params.sect === 'inst' && <Install setParams={setParams} />}
        </div>
    );
};

export default Docs;