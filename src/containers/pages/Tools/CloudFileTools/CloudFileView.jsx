import { useState } from 'react';
import { CloudFile } from 'fara-comp-react';

const CloudFileView = ({ values }) => {

    const [formdata, setFormdata] = useState(new FormData());

    const handleFileChange = (data) => setFormdata(data);

    return (
        <div className="cloudFileView">

            <pre className="cod-back">
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">CloudFile</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">onChange</span>=<span className="cod-blue">{'{'}</span><span className="cod-skyyellow">handleFileChange</span><span className="cod-blue">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">folderName</span>=<span className="cod-orange">'{values.folderName}'</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">contClass</span>=<span className="cod-orange">'{values.contClass}'</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">id</span>=<span className="cod-blue">{'{'}</span><span className="cod-orange">'abc1234'</span><span className="cod-blue">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">preImg</span>=<span className="cod-blue">{'{'}</span><span className={values.preImg === 'none' ? 'cod-blue' : 'cod-orange'}>'{values.preImg == 'none' ? 'null' : values.preImg}'</span><span className="cod-blue">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}><span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <CloudFile
                onChange={handleFileChange}
                folderName='avatars'
                contClass={values.contClass}
                preImg={`${import.meta.env.BASE_URL}${values.preImg === 'none' ? 'logo.png' : values.preImg}`}
            />

        </div>
    );
};

export default CloudFileView;