import { Popup } from 'fara-comp-react';

const PopupView = ({ values }) => {

    return (
        <div className="popupView">

            <pre className="cod-back">
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Popup</span></p>
                    <p style={{ marginTop: '6px' }}>   <span className="cod-skyblue">text</span>=<span className={values.text ? 'cod-orange' : 'cod-blue'}>{values.text !== '' ? `"${values.text}"` : 'null'}</span></p>
                    <p style={{ marginTop: '6px' }}>   <span className="cod-skyblue">styles</span>=<span className="cod-blue">{'{'}</span><span className="cod-yellow">{'{'}</span></p>
                    <p style={{ marginTop: '6px' }}>      <span className="cod-skyblue">color:</span><span className="cod-orange">"{values.color}"</span></p>
                    <p style={{ marginTop: '6px' }}>      <span className="cod-skyblue">size:</span><span className="cod-orange">"{values.size}"</span></p>
                    <p style={{ marginTop: '6px' }}>      <span className="cod-skyblue">width:</span><span className="cod-orange">"{values.position}"</span></p>
                    <p style={{ marginTop: '6px' }}>      <span className="cod-skyblue">width:</span><span className="cod-orange">"{values.width}"</span></p>
                    <p style={{ marginTop: '6px' }}>   <span className="cod-blue">{'}'}</span><span className="cod-yellow">{'}'}</span></p>
                    <p><span className="cod-gray">{'>'}</span></p>
                    <br />
                    <p> <span className="cod-gray">{'<'}</span><span className="cod-blue">div</span><span className="cod-gray">{'>'}</span></p>
                    <p style={{ marginTop: '6px' }}>   <span className="cod-gray">{'<'}</span><span className="cod-blue">p</span><span className="cod-gray">{'>'}</span>Párrafo 1<span className="cod-gray">{'</'}</span><span className="cod-blue">p</span><span className="cod-gray">{'>'}</span></p>
                    <p style={{ marginTop: '6px' }}>   <span className="cod-gray">{'<'}</span><span className="cod-blue">p</span><span className="cod-gray">{'>'}</span>Párrafo 2<span className="cod-gray">{'</'}</span><span className="cod-blue">p</span><span className="cod-gray">{'>'}</span></p>
                    <p style={{ marginTop: '6px' }}>   <span className="cod-gray">{'<'}</span><span className="cod-blue">p</span><span className="cod-gray">{'>'}</span>Párrafo 3<span className="cod-gray">{'</'}</span><span className="cod-blue">p</span><span className="cod-gray">{'>'}</span></p>
                    <p style={{ marginTop: '6px' }}> <span className="cod-gray">{'</'}</span><span className="cod-blue">div</span><span className="cod-gray">{'>'}</span></p>
                    <br />
                    <p><span className="cod-gray">{'</'}</span><span className="cod-green">Popup</span><span className="cod-gray">{'>'}</span></p>
                </code>
            </pre>


            <Popup
                text={values.text !== '' ? values.text : null}
                icon={values.icon !== '' ? values.icon : null}
                styles={{
                    color: values.color,
                    size: values.size,
                    position: values.position,
                    width: values.width,
                }}
            >
                <div style={{ backgroundColor: values.color }} className='flex-col'>
                    <p>Párrafo 1</p>
                    <p>Párrafo 2</p>
                    <p>Párrafo 3</p>
                </div>
            </Popup>

        </div>
    );
};

export default PopupView;