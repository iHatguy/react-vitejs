import { useState } from "react";


function App() {

  const [text, setText] = useState("")
  const [textFormatted, setTextFormatted] = useState(text)
  const [checked, setChecked] = useState(false)
  // let text = "Luka Ravi"

  const morfar = () => {
    console.log("clicou no morfar", text.toUpperCase());
    return setText(text.toUpperCase())
  }

  const changeInput = (event) => {
    // console.log("mudando o valor", event.target.value)
    setText(event.target.value)
    setTextFormatted(event.target.value)
  }

  const changeChecked = (event) => setChecked(event.target.value)

  const morfarRadio = (event) => {
    console.log("clicou no morfarRadio", event.target.value);

    let id = event.target.value
    if(id === "m"){
      setTextFormatted(text.toUpperCase())
    }

    else if(id === "n"){
      setTextFormatted(text.toLowerCase())
    }

    else if(id === "c"){
      setTextFormatted(text)
    }

    else{

    }

  }

  return (
    <>

      <button type="button" className="btn btn-dark" onClick={morfar}>Morfar</button>

      <form>
        <div className="row mb-3">
          <label htmlFor="text" className="col-sm-2 col-form-label">Insira seu Texto</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="text" value={text} onChange={changeInput}/>
          </div>
        </div>
        <div className="row mb-3">
          <h1>{textFormatted}</h1>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Converter para</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input checked={checked === 'm'} onChange={changeChecked} className="form-check-input" type="radio" name="maiusculo" id="m" value="m" onClick={morfarRadio} />
              <label className="form-check-label" htmlFor="m">
                Maíuscula
              </label>
            </div>
            <div className="form-check">
              <input checked={checked === 'n'} onChange={changeChecked} className="form-check-input" type="radio" name="minusculo" id="n" value="n" onClick={morfarRadio} />
              <label className="form-check-label" htmlFor="n">
                Minuscula
              </label>
            </div>
            <div className="form-check">
              <input checked={checked === 'c'} onChange={changeChecked} className="form-check-input" type="radio" name="cammel" id="c" value="c" onClick={morfarRadio} />
              <label className="form-check-label" htmlFor="c">
                Normalize
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </>
  )
}
export default App
