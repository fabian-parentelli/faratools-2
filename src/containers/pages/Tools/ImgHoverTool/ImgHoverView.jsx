import { ImgHover } from 'fara-comp-react';

const ImgHoverView = ({ values }) => {

    return (
        <div className="imgHoverView">

            <pre className="cod-back">
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">ImgHover</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">img</span>=<span className="cod-orange truncate">'{values?.img || ''}</span><span className="cod-orange">'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">border</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{values.border}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">objectFit</span><span className="cod-orange">'{values?.objectFit || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">pointer</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{values.pointer}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }} className="cod-gray">{'/>'}</p>
                </code>
            </pre>

            <section className='imgHoverViewSect'>
                <ImgHover
                    img={values.img || ''}
                    border={values.border == 'true' ? true: false}
                    objectFit={values.objectFit || ''}
                    pointer={values.pointer == 'true' ? true: false}
                />
            </section>
        </div>
    );
};

export default ImgHoverView;