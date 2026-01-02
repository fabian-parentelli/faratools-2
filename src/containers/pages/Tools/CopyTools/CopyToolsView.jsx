import { Copy } from 'fara-comp-react';

const CopyToolsView = ({ values }) => {

    return (
        <div className="copyToolsView">

            <pre className="cod-back">
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Copy</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">text</span>=<span className="cod-orange">'{values?.text || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">size</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{values?.size || ''}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">color</span>=<span className="cod-orange">'{values?.color || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">duration</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{values?.duration || ''}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }} className="cod-gray">{'/>'}</p>
                </code>
            </pre>

            <section className="copyToolsViewSect">
                <Copy
                    text={values?.text || 'texto 1'}
                    size={+values?.size || 12}
                    color={values?.color || '#00a67e'}
                    duration={+values?.duration || 4000}
                />
            </section>

        </div>
    );
};

export default CopyToolsView;