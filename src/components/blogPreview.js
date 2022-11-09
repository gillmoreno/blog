export default function BlogPreview(props) {
  return (
    <>
      <a href={props.url}>
        <img alt="post" className="rounded-xl hover:scale-104 ease-in duration-150" src={props.image}/>
        <p className="uppercase font-semibold my-3">
          {props.tags.map((tag) => (
            <a href="#" className="mr-2 text-blue-400 hover:underline hover:text-blue-600 ease-in ease-out duration-250">
              {tag}
            </a>
          ))}
        </p>
        <h2 className="font-semibold text-2xl hover:text-blue-800 ease-in ease-out duration-250">
          {props.title}
        </h2>
        <small>{props.date}</small>
      </a>
    </>
);
}