import { useState } from "react";

const TextInput = ({textToTranslate}) => {

    const [input, setInput] = useState();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <form onSubmit={(e) => {e.preventDefault(); textToTranslate(input);}} className="form">
                <textarea className="text-input-box" name="userInput" onChange={handleChange} placeholder="Enter text to be memed here"></textarea>
                <button className="translate-button">Translate</button>
            </form>
        </>
    )
}

export default TextInput;