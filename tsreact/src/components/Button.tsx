import { useState } from "react";

// props ke ley inertface bnaya
interface MyButtonProps {
    text:string|number|boolean;
    // onClick ko optional bna deya
    onClick?:() => void;
}
// useState m obj dena ho uhske ley interface
interface Book {
    name:string;
    price:number
}

const Button:React.FC<MyButtonProps> = (props) => {
    const {text , onClick} = props;
    // const [value ,setvalue] = useState(1);// 1way
    // const [value ,setvalue] = useState<number>(1)//2nd way
    const [value ,setvalue] = useState<Book>({name:"One",price:200});
  return (
    <>
    <div>  
        <h3> Book Name : {value.name} </h3>
        <h3>Price : {value.price}</h3>
        <button onClick={()=> setvalue({name:"Two",price:300})}>{text}</button>
        {/* <h3>{value}</h3> */}
      {/* <button onClick={()=> setvalue(value+1)}>{text}</button> */}
      
    </div>
    </>
  )
}

export default Button
