import { Loader } from 'fara-comp-react';
import { useEffect } from 'react';

const LoaderView = ({ values, setValues }) => {

    useEffect(() => {
        if (values.loading === 'true') {
            setTimeout(() => {
                setValues({ ...values, loading: 'false' });
            }, 3000);
        };
    }, [values.loading]);

    return (
        <div className="loaderView">

            <pre className="cod-back">
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Loader</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">loading</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{values.loading == 'true' ? 'true' : 'false'}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">color</span><span className="cod-orange">'{values?.color || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">text</span>=<span className={values?.text.length > 0 ? "cod-orange" : 'cod-blue'} >{values.text.length > 0 ? `'${values.text}'` : 'null'}</span></p>
                    <p style={{ marginTop: '6px' }} className="cod-gray">{'/>'}</p>
                </code>
            </pre>

            <button className='btn btnB' onClick={() => setValues({ ...values, loading: 'true' })}>
                Iniciar
            </button>

            <Loader
                loading={values.loading == 'true' ? true : false}
                color={values.color}
                text={values.text}
            />
        </div>
    );
};

export default LoaderView;