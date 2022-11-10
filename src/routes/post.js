import {
  useParams
} from "react-router-dom";
import H2 from "../components/h2"
import P from "../components/p"
import ImgBlock from "../components/imgBlock"
import QuoteBlock from "../components/quoteBlock"

const posts = [
  {
    id: 1,
    date: "November 10, 2022",
    title: "The beginning",
    content: [
        {
          h2: "It's gotta start somewhere",
        },
        {
          p: "This is the first paragraph, I'm just chechinkg if this can work or not",
        },
        {
          imgBlock: {
            img: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
            text: "Some image from the internet"
          },
        },
        {
          quoteBlock: {
            quote: "Rome wasn't build in a day",
            author: "Unknown",
          },
        },
        {
          p: "Another paragraph",
        }
    ]
  },
  {
    id: 2,
    date: "November 11, 2022",
    title: "The future",
    content: [
        {
          h2: "It's gotta start somewhere",
        },
        {
          p: "This is the first paragraph, I'm just chechinkg if this can work or not",
        },
        {
          imgBlock: {
            img: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
            text: "Some image from the internet"
          },
        },
        {
          quoteBlock: {
            quote: "Rome wasn't build in a day",
            author: "Unknown",
          },
        },
        {
          p: "Another paragraph",
        }
    ]
  }
]

function getPost(postId) {
  for (let i=0; i < posts.length; i++) {
    if (posts[i].id === parseInt(postId)) {
      return posts[i]
    }
  }
}

function renderContent(content) {
  switch (Object.keys(content)[0]) {
    case "h2":
      return <H2 text={content.h2}/>
    case "p":
      return <P text={content.p}/>
    case "imgBlock":
      return <ImgBlock img={content.imgBlock.img} text={content.imgBlock.text}/>
    case "quoteBlock":
      return <QuoteBlock quote={content.quoteBlock.quote} author={content.quoteBlock.author}/>
    default:
      return <div></div>
  }
}

export default function Post() {
  let { postId } = useParams();
  let post = getPost(postId)
  if (post) {
    return (
      <>
        <div className="text-center mt-5">
          <h1 className="font-semibold text-5xl">
            {post.title}
          </h1>
          <p className="font-semibold italic">
            {post.date}
          </p>
        </div>
        {post.content.map((item) => (renderContent(item)))}
      </>
    );
  } else {
    return (
      <>
      "BLOG POST NON EXISTENT"
      </>
    );
  }
}