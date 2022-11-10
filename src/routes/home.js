import BlogPreview from "../components/blogPreview";

const firstTwoBlogPosts = [
  {
    url: "/contact",
    image: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
    tags: ["Lifestyle"],
    title: "Su chingada madre loco!",
    date: "November 9, 2022"
  },
  {
    url: "/contact",
    image: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
    tags: ["Lifestyle"],
    title: "Su chingada madre loco!",
    date: "November 8, 2022"
  },
]

const otherBlogPosts = [
  {
    url: "/contact",
    image: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
    tags: ["Lifestyle1", "su chingada"],
    title: "Su chingada madre loco!",
    date: "November 7, 2022"
  },
  {
    url: "/contact",
    image: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
    tags: ["Lifestyle2"],
    title: "Su chingada madre loco!",
    date: "November 6, 2022"
  },
  {
    url: "/contact",
    image: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
    tags: ["Lifestyle3"],
    title: "Su chingada madre loco!",
    date: "November 5, 2022"
  },
  {
    url: "/contact",
    image: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
    tags: ["Lifestyle4"],
    title: "Su chingada madre loco!",
    date: "November 4, 2022"
  },
  {
    url: "/contact",
    image: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
    tags: ["Lifestyle"],
    title: "Su chingada madre loco!",
    date: "November 3, 2022"
  },
  {
    url: "/contact",
    image: "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=800",
    tags: ["Lifestyle"],
    title: "Su chingada madre loco!",
    date: "November 2, 2022"
  },
]

export default function Root() {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
        {firstTwoBlogPosts.map((post) => (
          <div className="p-4">
            <BlogPreview 
              url={post.url}
              image={post.image}
              tags={post.tags} 
              title={post.title}
              date={post.date}
            />
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-2">
          {otherBlogPosts.map((post) => (
            <div className="p-4">
              <BlogPreview 
                url={post.url}
                image={post.image}
                tags={post.tags} 
                title={post.title}
                date={post.date}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}