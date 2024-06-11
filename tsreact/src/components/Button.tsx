
interface MyButtonProps {
    text:string|number|boolean;
    // onClick ko optional bna deya
    onClick?:() => void;
}

const Button:React.FC<MyButtonProps> = (props) => {
    const {text , onClick} = props;
  return (
    <>
    <div>  
      <button onClick={onClick}>{text}</button>
    </div>
    </>
  )
}

export default Button
