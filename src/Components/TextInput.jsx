import { useState } from "react";

const TextInput = ({text, textToTranslate}) => {

    const [input, setInput] = useState();

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    return (
        <>
            <form onSubmit={(e) => {e.preventDefault(); textToTranslate(input)}}>
                <textarea rows="4" cols="50" name="userInput" onChange={handleChange}></textarea>
                <button>Translate</button>
            </form>
        </>
    )
}

export default TextInput;