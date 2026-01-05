import { Downpdf } from 'fara-comp-react';

const DownPdfView = ({ values }) => {

    return (
        <div className="flex-col">

            <pre className="cod-back">
                <code>
                    <p className="cod-gray"><span>{'<'}</span><span className="cod-green">Downpdf</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">url</span><span className="cod-orange">'{values?.url || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">position</span><span className="cod-orange">'{values?.position || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">color</span><span className="cod-orange">'{values?.color || ''}'</span></p>
                    <p style={{ marginTop: '6px' }} className="cod-gray">{'/>'}</p>
                </code>
            </pre>

            <section className='flex-denter downPdfView'>
                <Downpdf
                    url={values.url || ''}
                    position={values.position || ''}
                    color={values.color || ''}
                />
            </section>

        </div>
    );
};

export default DownPdfView;