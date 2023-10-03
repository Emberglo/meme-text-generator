import { useState } from "react";

const TextInput = ({text, textToTranslate}) => {

    const [input, setInput] = useState();

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    return (
        <>
            <form onSubmit={(e) => {e.preventDefault(); textToTranslate(input)}} className="form">
                <textarea className="text-input-box" name="userInput" onChange={handleChange}></textarea>
                <button className="translate-button">Translate</button>
            </form>
        </>
    )
}

export default TextInput;