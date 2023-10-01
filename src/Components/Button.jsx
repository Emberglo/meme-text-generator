const Button = ({text, textToTranslate}) => {
  return (
    <>
      <button onClick={() => textToTranslate(text)}>Translate</button>
    </>
  )
}

export default Button
