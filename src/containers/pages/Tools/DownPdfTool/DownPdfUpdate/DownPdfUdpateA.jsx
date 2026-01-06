

const DownPdfUdpateA = () => {

    return (
        <div className="downPdfUdpateA">

            <h3>Motivo del cambio en la lógica de descarga</h3>

            <p style={{ fontSize: '14px' }}>Updare 0.0.14</p>
            <p>
                Inicialmente la descarga del archivo se realizaba utilizando <code>fetch</code> y
                convirtiendo la respuesta a <code>blob</code> para forzar la descarga desde JavaScript.
            </p>

            <p>
                Este enfoque es útil cuando el endpoint requiere headers personalizados
                (tokens, autorización manual) o cuando el archivo debe procesarse antes
                de descargarse. Sin embargo, implica mayor consumo de memoria y más
                complejidad innecesaria para archivos accesibles directamente.
            </p>

            <p>
                La implementación fue simplificada utilizando un enlace directo:
            </p>

            <p>
                Esta versión aprovecha el comportamiento nativo del navegador para manejar
                la descarga, resultando en un código más simple, eficiente y confiable.
                Es la opción recomendada cuando la URL es accesible y el backend expone
                correctamente el archivo.
            </p>

        </div>
    );
};

export default DownPdfUdpateA;