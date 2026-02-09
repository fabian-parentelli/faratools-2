import './pages.css';
import { useEffect, useRef } from "react";
import Sider from './Sider/Sider';
import { Outlet } from 'react-router-dom';
import { useQueryParams } from '../../hooks/useQueryParams';

const Pages = () => {

    const pagesSectRef = useRef(null);
    const [params, setParams] = useQueryParams();

    useEffect(() => {
        if (pagesSectRef.current) {
            pagesSectRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            document.documentElement.scrollTo(0, 0);
        };
    }, [params?.sect]);

    return (
        <div className="pages">
            <Sider params={params} setParams={setParams} />

            <section className='pagesSect' ref={pagesSectRef}>
                <Outlet context={{ params, setParams }} />
            </section>
        </div>
    );
};

export default Pages;