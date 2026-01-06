import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const ImgHoverCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<ImgHover url='url' />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center" style={{ gap: '1rem', margin: '1rem 0' }} onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">ImgHover</span> <span className="cod-skyblue">url</span>=<span className="cod-orange">'url'</span> <span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default ImgHoverCopy;