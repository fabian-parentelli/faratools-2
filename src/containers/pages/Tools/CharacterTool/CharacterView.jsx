import { CharacterCounter } from 'fara-comp-react';

const CharacterView = ({ values }) => {

    return (
        <div className="characterView">

            <pre className="cod-back">
                <code>
                    <p><span className='cod-gray'>{'<'}</span><span className='cod-green'>CharacterCounter</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className='cod-skyblue'>min</span>=<span className='cod-yellow'>{'{'}</span><span className='cod-skyblue'>{values?.min || ''}</span><span className='cod-yellow'>{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className='cod-skyblue'>max</span>=<span className='cod-yellow'>{'{'}</span><span className='cod-skyblue'>{values?.max || ''}</span><span className='cod-yellow'>{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className='cod-skyblue'>text</span>=<span className='cod-yellow'>{'{'}</span><span className='cod-blue'>TextState</span><span className='cod-yellow'>{'}'}</span></p>
                    <p style={{ marginTop: '6px' }} className='cod-gray'>{'/>'}</p>
                </code>
            </pre>

            <section>
                <CharacterCounter min={values?.min} max={values?.max} text={values?.text} />
            </section>

        </div>
    );
};

export default CharacterView;