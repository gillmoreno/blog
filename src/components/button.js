export default function Button(props) {
    let variant = "";
    switch (props.variant) {
      case "secondary":
        variant = "hover:bg-gray-700 bg-gray-500 text-white"
        break
      default:
        variant = "hover:bg-blue-700 bg-blue-500 text-white"
        break
    }

    return (
        <button class={`
          ${props.expand ? 'hover:scale-125 ease-linear transition-all duration-15': ''}
          font-bold py-2 px-4 rounded
          ${variant} 
        `}>
          {props.text}
        </button>
    );
}