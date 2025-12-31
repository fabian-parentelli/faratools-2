import { Copy } from 'fara-comp-react';

const CloudFileInputs = ({ values, setValues }) => {

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className="cloudFileInputs">

            <div>
                <Copy text={'folderName'} color='gray' />
                <select name="folderName" value={values.folderName} onChange={handleChange}>
                    <option value="avatars">avatars</option>
                    <option value="users">users</option>
                    <option value="products">products</option>
                </select>
            </div>

            <div>
                <Copy text={'contClass'} color='gray' />
                <select name="contClass" value={values.contClass} onChange={handleChange}>
                    <option value="mycss">Mi css</option>
                    <option value="cfRect">cfRect</option>
                    <option value="cfCircle">cfCircle</option>
                    <option value="cfTicket">cfTicket</option>
                    <option value="cfSmall">cfSmall</option>
                </select>
            </div>

            <div>
                <Copy text={'preImg'} color='gray' />
                <select name="preImg" value={values.preImg} onChange={handleChange}>
                    <option value="none">none</option>
                    <option value="/faraday.png">faraday</option>
                    <option value="/avatar.png">avatar</option>
                </select>
            </div>

        </div>
    );
};

export default CloudFileInputs;