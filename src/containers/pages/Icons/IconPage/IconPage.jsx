import { useState } from 'react';
import './iconPage.css';
import { Icons, Snackbar } from 'fara-comp-react';

const IconPage = ({ setParams }) => {

    const [snack, setSnack] = useState({ open: false, status: 'success', message: null });

    const handleCopy = (name) => {
        setSnack({ open: true, message: name, status: 'success' });
        navigator.clipboard.writeText(name);
        setTimeout(() => { setSnack({ open: false, status: 'success', message: null }) }, 2000);
    };

    return (
        <div className="iconPage">
            <h2>Listado de íconos</h2>

            {iconArray.map((doc, ind) => (
                <div key={ind}>
                    <h3>{doc.title}</h3>
                    <section className='iconPageSect'>
                        {doc.ic.map(i => (
                            <div key={i.name} onClick={() => handleCopy(i.name)}>
                                <Icons type={i.name} color='white' />
                            </div>
                        ))}
                    </section>
                </div>
            ))}

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'impl' })}>Implementación</p>
                <p onClick={() => setParams({ sect: 'icons' })}>Actualización</p>
            </section>
            <Snackbar snack={snack} />
        </div>
    );
};

export default IconPage;


const iconArray = [
    {
        title: 'Redes Sociales y marcas',
        ic: [
            { cat: 'social', name: 'whatsapp' },
            { cat: 'social', name: 'facebook' },
            { cat: 'social', name: 'x' },
            { cat: 'social', name: 'instagram' },
            { cat: 'social', name: 'youtube' },
            { cat: 'social', name: 'github' },
            { cat: 'social', name: 'spotify' },
        ]
    },
    {
        title: 'Desarrollo',
        ic: [
            { cat: 'ui', name: 'computer' },
            { cat: 'develop', name: 'database' },
            { cat: 'develop', name: 'cloud' },
            { cat: 'develop', name: 'css' },
            { cat: 'develop', name: 'html' },
            { cat: 'develop', name: 'js' },
            { cat: 'develop', name: 'node' },
            { cat: 'develop', name: 'react' },
            { cat: 'develop', name: 'mongo' },
            { cat: 'develop', name: 'npm' },

        ]
    },
    {
        title: 'Usuario',
        ic: [
            { cat: 'ui', name: 'users' },
            { cat: 'ui', name: 'user' },
            { cat: 'ui', name: 'notuser' },
            { cat: 'ui', name: 'run' },
            { cat: 'ui', name: 'userCircle' },
            { cat: 'ui', name: 'id' },
        ]
    },
    {
        title: 'Estados',
        ic: [
            { cat: 'status', name: 'success' },
            { cat: 'status', name: 'error' },
            { cat: 'status', name: 'info' },
            { cat: 'status', name: 'warning' },
        ]
    },
    {
        title: 'Multimedios',
        ic: [
            { cat: 'media', name: 'image' },
            { cat: 'media', name: 'notimage' },
            { cat: 'media', name: 'publicity' },
            { cat: 'media', name: 'video' },
            { cat: 'media', name: 'camera' },
            { cat: 'media', name: 'radio' },
            { cat: 'media', name: 'album' },
            { cat: 'ui', name: 'browser' },
            { cat: 'ui', name: 'browserplus' },
            { cat: 'ui', name: 'browserdel' },
        ]
    },
    {
        title: 'Interfaz de usuario',
        ic: [
            { cat: 'ui', name: 'app' },
            { cat: 'ui', name: 'dashboard' },
            { cat: 'actions', name: 'replace' },
            { cat: 'ui', name: 'icon' },
            { cat: 'ui', name: 'setting' },
            { cat: 'ui', name: 'dothor' },
            { cat: 'ui', name: 'dotver' },
            { cat: 'ui', name: 'chevron' },
            { cat: 'ui', name: 'star' },
            { cat: 'ui', name: 'bell' },
            { cat: 'ui', name: 'heart' },
            { cat: 'ui', name: 'door' },
            { cat: 'ui', name: 'delete' },
            { cat: 'ui', name: 'square' },
            { cat: 'ui', name: 'copy' },
            { cat: 'ui', name: 'calendar' },
            { cat: 'ui', name: 'event' },
            { cat: 'ui', name: 'arrows' },
            { cat: 'ui', name: 'qr' },
            { cat: 'ui', name: 'scan' },
            { cat: 'ui', name: 'print' },
            { cat: 'status', name: 'activity' },
            { cat: 'ui', name: 'menu' },
            { cat: 'status', name: 'check' },
            { cat: 'ui', name: 'clip' },
            { cat: 'ui', name: 'like' },
            { cat: 'ui', name: 'arrowleft' },
            { cat: 'ui', name: 'arrowright' },
            { cat: 'ui', name: 'question' },
            { cat: 'ui', name: 'search' },
            { cat: 'ui', name: 'eye' },
            { cat: 'ui', name: 'eyeclosed' },
            { cat: 'files', name: 'folder' },
        ]
    },
    {
        title: 'Archivos',
        ic: [
            { cat: 'files', name: 'clipboard' },
            { cat: 'files', name: 'report' },
            { cat: 'files', name: 'down' },
            { cat: 'files', name: 'tickets' },
            { cat: 'files', name: 'sendfile' },
            { cat: 'ui', name: 'return' },
            { cat: 'files', name: 'pdf' },
            { cat: 'media', name: 'filemusic' },
            { cat: 'ui', name: 'bookUser' },
            { cat: 'ui', name: 'book' },
        ]
    },
    {
        title: 'Financieros',
        ic: [
            { cat: 'economy', name: 'credit' },
            { cat: 'economy', name: 'notcredit' },
            { cat: 'economy', name: 'cart' },
            { cat: 'commerce', name: 'store' },
            { cat: 'commerce', name: 'cash' },
            { cat: 'ui', name: 'chart' },
            { cat: 'data', name: 'analytic' },
            { cat: 'commerce', name: 'bank' },
            { cat: 'commerce', name: 'cashregister' },
            { cat: 'ui', name: 'bag' },
        ]
    },
    {
        title: 'Contacto, ubicación y tiempo',
        ic: [
            { cat: 'ui', name: 'message' },
            { cat: 'ui', name: 'email' },
            { cat: 'ui', name: 'emailopen' },
            { cat: 'actions', name: 'send' },
            { cat: 'ui', name: 'map' },
            { cat: 'ui', name: 'notmap' },
            { cat: 'ui', name: 'clock' },
            { cat: 'ui', name: 'phone' },
        ]
    },
    {
        title: 'Artículos',
        ic: [
            { cat: 'ui', name: 'ticket' },
            { cat: 'ui', name: 'shirt' },
            { cat: 'food', name: 'carrot' },
            { cat: 'ui', name: 'direction' },
            { cat: 'ui', name: 'house' },
            { cat: 'security', name: 'lock' },
            { cat: 'security', name: 'padlock' },
            { cat: 'ui', name: 'bike' },
            { cat: 'ui', name: 'truck' },
            { cat: 'ui', name: 'boxPack' },
            { cat: 'actions', name: 'pencil' },
            { cat: 'ui', name: 'signature' },
            { cat: 'ui', name: 'certificate' },
            { cat: 'ui', name: 'paint' },
            { cat: 'ui', name: 'bottle' },
            { cat: 'ui', name: 'coffee' },
            { cat: 'ui', name: 'glass' },
        ]
    },
    {
        title: 'Comandos',
        ic: [
            { cat: 'security', name: 'onoff' },
            { cat: 'player', name: 'play' },
            { cat: 'player', name: 'pause' },
            { cat: 'player', name: 'playback' },
            { cat: 'player', name: 'playnext' },
            { cat: 'player', name: 'ejection' },
            { cat: 'player', name: 'volumenot' },
            { cat: 'player', name: 'volumen2' },
            { cat: 'player', name: 'volume' },
            { cat: 'player', name: 'playlistad' },
            { cat: 'player', name: 'playlist' },
            { cat: 'actions', name: 'exchange' },
            { cat: 'media', name: 'music' },
        ]
    },
];