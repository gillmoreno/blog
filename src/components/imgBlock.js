export default function ImgBlock(props) {
  return (
    <div className="flex flex-col justify-center items-center my-3">
      <img className="rounded-xl" src={props.img} alt={props.text}/>
      <p className="italic">{props.text}</p>
    </div>
  )
}