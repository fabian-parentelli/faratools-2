import { useState } from 'react';
import { Icons, Snackbar } from 'fara-comp-react';

const Update0015 = () => {

    const [snack, setSnack] = useState({ open: false, status: 'success', message: 'Icono copiado' });

    const handleCopy = (path) => {
        navigator.clipboard.writeText(`<Icons type='${path}' />`);
        setSnack({ ...snack, open: true });
        setTimeout(() => { setSnack({ ...snack, open: false }) }, 4000);
    };

    return (
        <div className="update0012">
            <h4>Actualización 0.0.15</h4>
            <p>En la actualización 0.0.15 se incorporaron 7 nuevos íconos al set.</p>
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

export default Update0015;

const updicons = [
    "arrowsend",
    "arrowres",
    "article",
    "articleoff",
    "reload",
    "upload",
    "zoom",
];