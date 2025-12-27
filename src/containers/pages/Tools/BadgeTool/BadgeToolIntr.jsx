import { useState } from 'react';
import { Icons, Tooltip } from 'fara-comp-react';

const BadgeToolIntr = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Badge } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col" style={{ marginTop: '1rem', lineHeight: '2' }}>

            <h4 className='colaccent'>Importación</h4>

            <p>Badge es un componente visual de React pensado para mostrar información breve y contextual de forma clara y compacta. Se utiliza comúnmente para representar contadores, estados o notificaciones asociadas a un ícono, ayudando a destacar datos relevantes sin ocupar demasiado espacio en la interfaz.</p>

            <p>El componente permite personalizar su apariencia mediante propiedades como el tipo de ícono (type), el contenido o valor a mostrar (name), el color de fondo (backgroundColor) y el tamaño (size). Gracias a esta flexibilidad, el Badge se adapta fácilmente a distintos contextos de uso, como indicadores de pedidos, alertas, mensajes o estados de transporte, manteniendo siempre una presentación consistente y visualmente integrada con el resto de la aplicación.</p>

            <div className="cod-back flex-center" style={{ gap: '12px', margin: '1rem 0' }} onClick={handleCopy}>
                <pre>
                    <code>
                        <p><span className='cod-pink'>import</span> <span className='cod-yellow'>{'{'}</span> <span className='cod-skyblue'>Badge</span> <span className='cod-yellow'>{'}'}</span> <span className='cod-pink'>from</span> <span className='cod-orange'>'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer'>
                    <Icons type={copy ? 'success' : 'copy'} size='15px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default BadgeToolIntr;