import { useState } from "react";

const Form:React.FC = () => {
    
    const [value ,setvalue] = useState<string | undefined>();

    //Event ke ley onCHnage ke ley - React.ChangeEvent<HTMLInputElement>
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setvalue(e.target.value)
    }
// form submit ke ley
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);  
    }
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Enter Your Name"/>
        <button type="submit">Submit</button>
        <h1>Name : {value}</h1>
        </form>
      </div>
    </>
  )
}

export default Form
