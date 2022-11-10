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

    if (props.tooltip) {
      const randomNumber = Math.floor(Math.random() * 1001);
      return (
        <>
          <button 
            data-tooltip-target={`tooltip-${randomNumber}`}
            class={`
            ${props.expand ? 'hover:scale-125 ease-linear transition-all duration-15': ''}
            font-bold py-2 px-4 rounded
            ${variant} 
          `}>
            {props.text}
          </button>
          <div id={`tooltip-${randomNumber}`} role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
              Tooltip content
              <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </>
    );
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