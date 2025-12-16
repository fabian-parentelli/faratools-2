import './pages.css';
import { useEffect } from "react";
import Sider from './Sider/Sider';
import { Outlet } from 'react-router-dom';
import { useQueryParams } from '../../hooks/useQueryParams';

const Pages = () => {

    const [params, setParams] = useQueryParams();

    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [params?.sect]);

    return (
        <div className="pages">
            <Sider params={params} setParams={setParams} />
            <Outlet context={{ params, setParams }} />
        </div>
    );
};

export default Pages;