import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("����");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`�̸�: ${name}, ����: ${gender}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                �̸�:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                ����:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="����">����</option>
                    <option value="����">����</option>
                </select>
            </label>
            <button type="submit">����</button>
        </form>
    );
}

export default SignUp;