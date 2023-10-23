const scaleNames = {
    c: "����",
    f: "ȭ��",
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                �µ��� �Է����ּ���(����:{scaleNames[props.scale]});
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;