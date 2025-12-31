import { useState } from "react";
import { Icons, Tooltip } from 'fara-comp-react';

const CloudFileCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText(
            `const [formdata, setFormdata] = useState(new FormData());
    const handleFileChange = ( data ) => setFormdata(data);
    <CloudFile onChange={handleFileChange} folderName='avatars' contClass='cfCircle' />`);
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back cloudFileCopy">

            <pre onClick={handleCopy}>
                <code>
                    <p><span className="cod-blue">const</span> <span className="cod-pink">{'['}</span><span className="cod-blue">formdata</span>, <span className="cod-skyyellow">setFormdata</span><span className="cod-pink">{']'}</span> = <span className="cod-skyyellow">useState</span><span className="cod-pink">{'('}</span><span className="cod-blue">new</span> <span className="cod-green">FormData</span><span className="cod-blue">{'()'}</span><span className="cod-pink">{')'}</span>;</p>

                    <br />

                    <p><span className="cod-blue">const</span> <span className="cod-skyyellow">handleFileChange</span> = <span className="cod-pink">{'('}</span><span className="cod-skyblue">data</span><span className="cod-pink">{')'}</span> <span className="cod-blue">{'=>'}</span> <span className="cod-skyyellow">setFormdata</span><span className="cod-pink">{'('}</span><span className="cod-skyblue">data</span><span className="cod-pink">{')'}</span>;</p>

                    <br />

                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">CloudFile</span> <span className="cod-skyblue">onChange</span>=<span className="cod-blue">{'{'}</span><span className="cod-skyblue">handleFileChange</span><span className="cod-blue">{'}'}</span> <span className="cod-skyblue">folderName</span>=<span className="cod-orange">'avatars'</span> <span className="cod-skyblue">contClass</span>=<span className="cod-orange">'cfCircle'</span> <span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='copy' position='top' color='#00a67e'>
                <Icons type={copy ? 'success' : 'copy'} size='20px' />
            </Tooltip>
        </div>
    );
};

export default CloudFileCopy;