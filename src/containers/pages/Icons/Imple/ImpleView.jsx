
const ImpleView = ({ values }) => {

    return (
        <pre className="cod-back" style={{ marginTop: '1rem' }}><code>
            <p><span className="cod-gray">{'<'}</span> <span className="cod-green">Icons</span></p>
            <p style={{marginTop: '6px'}}>     <span className="cod-skyblue">color</span>=<span className="cod-orange">"{values?.color || ''}"</span></p>
            <p style={{marginTop: '6px'}}>     <span className="cod-skyblue">type</span>=<span className="cod-orange">"{values?.type || ''}"</span></p>
            <p style={{marginTop: '6px'}}>     <span className="cod-skyblue">size</span>=<span className="cod-orange">"{values?.size || ''}"</span></p>
            <p style={{marginTop: '6px'}}>     <span className="cod-skyblue">onClick</span>=<span className="cod-blue">{'{'}</span><span className="cod-yellow">{'()'}</span> <span className="cod-blue">{'=>'}</span> <span className="cod-skyyellow">alert</span><span className="cod-yellow">{'('}</span><span className="cod-orange">"{values?.onClick || ''}"</span><span className="cod-yellow">{')'}</span></p>
            <p style={{marginTop: '6px'}}>     <span className="cod-skyblue">backCol</span>=<span className="cod-orange">"{values?.backCol || ''}"</span></p>
            <p style={{marginTop: '6px'}}>     <span className="cod-skyblue">bold</span>=<span className="cod-orange">"{values?.bold || ''}"</span></p>
            <p style={{marginTop: '6px'}}>     <span className="cod-skyblue">type</span>=<span className="cod-orange">"{values?.type || ''}"</span></p>
            <p style={{marginTop: '6px'}}>     <span className="cod-skyblue">hover</span>=<span className="cod-orange">"{values?.hover || ''}"</span></p>
            <p style={{marginTop: '6px'}}><span className="cod-gray">{'/>'}</span></p>
        </code></pre>
    );
};

export default ImpleView;