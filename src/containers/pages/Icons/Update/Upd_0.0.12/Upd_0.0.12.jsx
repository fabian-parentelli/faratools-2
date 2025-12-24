import './update0012.css';
import { useState } from 'react';
import { Icons, Snackbar } from 'fara-comp-react';

const Update0012 = () => {

    const [snack, setSnack] = useState({ open: false, status: 'success', message: 'Icono copiado' });

    const handleCopy = (path) => {
        navigator.clipboard.writeText(`<Icons type='${path}' />`);
        setSnack({ ...snack, open: true });
        setTimeout(() => { setSnack({...snack, open: false}) }, 4000);
    };

    return (
        <div className="update0012">
            <h4>Actualización 0.0.12</h4>
            <p>En la actualización 0.0.12 se incorporaron 19 nuevos íconos al set.</p>
            <p>Los íconos añadidos son:</p>

            <section>
                {updicons.map(doc => (
                    <div key={doc} onClick={() => handleCopy(doc)}>
                        <Icons type={doc} color='white' />
                        <p>{doc}</p>
                    </div>
                ))}
            </section>

            <Snackbar snack={snack} />
        </div>
    );
};

export default Update0012;

const updicons = [
    "chevron",
    "replace",
    "folder",
    "paint",
    "bag",
    "bottle",
    "coffee",
    "glass",
    "send",
    "emailopen",
    "heart",
    "user",
    "exchange",
    "filemusic",
    "music",
    "playlistad",
    "ejection",
    "volumen2",
    "album"
];