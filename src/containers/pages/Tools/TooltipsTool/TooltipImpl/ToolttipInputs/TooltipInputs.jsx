import './tooltipInputs.css';
import { Copy } from "fara-comp-react";

const TooltipInputs = ({ values, setValues }) => {

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div id="tooltipInputs">

            <div>
                <Copy text='text' color='gray' size='14px' />
                <input type="text" value={values?.text || ''} onChange={handleChange} name='text' />
            </div>

            <div>
                <Copy text='position' color='gray' size='14px' />
                <select name="position" value={values?.position || ''} onChange={handleChange}>
                    <option value="top">top</option>
                    <option value="bottom">bottom</option>
                    <option value="left">left</option>
                    <option value="right">right</option>
                    <option value="none">none</option>
                </select>
            </div>

            <div>
                <Copy text='backgroundColor' color='gray' size='14px' />
                <select name="backgroundColor" value={values?.backgroundColor || ''} onChange={handleChange}>
                    <option value="#00a67e">#00a67e</option>
                    <option value="#28283c">#28283c</option>
                    <option value="#06372C">#06372C</option>
                    <option value="red">red</option>
                </select>
            </div>

            <div>
                <Copy text='color' color='gray' size='14px' />
                <select name="color" value={values?.color || ''} onChange={handleChange}>
                    <option value="white">white</option>
                    <option value="#fdfd96">#fdfd96</option>
                    <option value="#3CF1AF">#3CF1AF</option>
                    <option value="#ff4081">#ff4081</option>
                </select>
            </div>

            <div>
                <Copy text='cursor' color='gray' size='14px' />
                <select name="cursor" value={values?.cursor || ''} onChange={handleChange}>
                    <option value="pointer">pointer</option>
                    <option value="grab">grab</option>
                    <option value="crosshair">crosshair</option>
                    <option value="move">move</option>
                </select>
            </div>

        </div>
    );
};

export default TooltipInputs;