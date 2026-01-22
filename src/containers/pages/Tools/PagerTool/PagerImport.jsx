import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const PagerImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Pager } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="pagerImport flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>Muestra la página actual y, si está disponible, los números de página anterior y siguiente. Permite cambiar de página actualizando el estado externo mediante la función setQuery y, opcionalmente, se desplaza automáticamente a la parte superior de la pantalla al cambiar de página. Su diseño y color de fondo se pueden personalizar, lo que ofrece una forma sencilla y reutilizable de navegar entre las páginas de resultados paginados.</p>

            <div className="cod-back pagerImportCod" onClick={handleCopy}>

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Pager</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default PagerImport;