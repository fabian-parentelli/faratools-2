import './tooltipCode.css';

const TooltipCode = ({ values }) => {

    return (
        <pre className="cod-back" style={{width: '280px'}}>
            <code>
                <p><span className="cod-gray">{'<'}</span><span className="cod-green">Tooltip</span></p>
                <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">text</span>=<span className="cod-orange">"{values?.text || ''}"</span></p>
                <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">position</span>=<span className="cod-orange">"{values?.position || ''}"</span></p>
                <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">backgroundColor</span>=<span className="cod-orange">"{values?.backgroundColor || ''}"</span></p>
                <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">color</span>=<span className="cod-orange">"{values?.color || ''}"</span></p>
                <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">cursor</span>=<span className="cod-orange">"{values?.cursor || ''}"</span></p>
                <p style={{ marginTop: '6px' }}><span className="cod-gray">{'>'}</span></p>
                <p style={{ marginTop: '6px' }}>     <span className="cod-gray">{'<'}</span><span className="cod-green">Icons</span> <span className="cod-skyblue">type</span>=<span className="cod-orange">"app"</span> <span className="cod-gray">{'/>'}</span></p>
                <p style={{ marginTop: '6px' }}><span className="cod-gray">{'</'}</span><span className="cod-green">Tooltip</span><span className="cod-gray">{'>'}</span></p>
            </code>
        </pre>
    );
};

export default TooltipCode;