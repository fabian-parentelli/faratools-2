
const CloudFileUpdate = () => {

    return (
        <div className="flex-col">
            <h4 className="colaccent">Actualización</h4>
            <p>Update 0.0.13</p>

            <div className="cloudFileUpdate">
                <p>Se incorporó el prop <strong className="colaccent">preImg</strong>:</p>
                <p>El componente CloudFile carga por defecto como imagen previa el archivo logo.png desde la carpeta public.</p>
                <p>Esta actualización permite definir una imagen previa personalizada, reemplazando la imagen por defecto.</p>
                <p>Un caso de uso común es la imagen de perfil de un usuario: se muestra la imagen actual y, al hacer click sobre ella, el usuario puede seleccionar y actualizarla por otra imagen de forma sencilla.</p>
                <p>Este no es un prop obligatorio, es opcional.</p>
            </div>
        </div>
    );
};

export default CloudFileUpdate;