import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const DownPdfCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Downpdf url='url_del_pdf' position='top' color='blue'/>");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center" style={{ gap: '1rem', margin: '1rem 0' }} onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Downpdf</span> <span className="cod-skyblue">url</span>=<span className="cod-orange">'url_del_pdf'</span> <span className="cod-skyblue">position</span>=<span className="cod-orange">'top'</span> <span className="cod-skyblue">color</span>=<span className="cod-orange">'blue'</span><span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default DownPdfCopy;