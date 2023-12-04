interface IProps{
  className:string;
  text:string;
}
const Button=(props:IProps)=>{
  const{className,text}=props;
  return(
    <>
    <button className={`${className} rounded-lg px-[8px] gap-[4px] min-w-[50px]  min-h-[24px] text-white`}>{text}</button>
    </>
  )
}
export default Button;