import './App.css';
import Header from './Components/Header';
import TextInput from './Components/TextInput';
import TextOutput from './Components/TextOutput';
import { useState } from 'react';

function App() {

  const [text, setText] = useState();

  const textToTranslate = (text) => {
    setText(text);
    translateText(text);
    navigator.clipboard.writeText(text);
  }

  function translateText(text) {
    let oldStr = [...text];
    let prevCase = "";
    let newStrArr = [];
    let finalStr = "";
    
    for(let i = 0; i < oldStr.length; i++) {
        if(text[i].toLowerCase() !== text[i].toUpperCase()) {
            if(prevCase === "upper" || prevCase === "") {
                newStrArr.push(oldStr[i].toLowerCase());
                prevCase = "lower";
            } else {
                newStrArr.push(oldStr[i].toUpperCase());
                prevCase = "upper";
            }
        } else {
            newStrArr.push(oldStr[i]);
        }
    }
    
    finalStr = newStrArr.join("");

    setText(finalStr);
  }

  return (
    <div className="app">
      <Header />

      <TextInput textToTranslate={textToTranslate} />

      <TextOutput text={text} />
    </ div>
  );
}

export default App;
