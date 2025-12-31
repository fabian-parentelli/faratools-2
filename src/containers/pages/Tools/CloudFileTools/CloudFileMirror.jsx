import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css as cssLang } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';

const CloudFileMirror = () => {
    const [css, setCss] = useState(`.mycss { 
    border: 5px solid #00a67e;
    width: 200px;
}

.mycss .cloudUploadIcon {
    /* Puedes modificar estilos de la imagen inicial */
}

`);

    return (
        <>
            <style>{css}</style>

            <CodeMirror
                value={css}
                height="200px"
                extensions={[cssLang()]}
                theme={oneDark}
                onChange={(value) => setCss(value)}
            />
        </>
    );
};

export default CloudFileMirror;