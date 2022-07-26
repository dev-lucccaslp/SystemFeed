import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post 
        author= "Lucas"
        content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati provident sit fugiat suscipit dolorum, vel, praesentium, rerum aliquam nam distinctio quam voluptate asperiores quas inventore molestiae amet quod eveniet."
      />

    <Post 
        author= "Diego Fernandes"
        content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati provident sit fugiat suscipit dolorum, vel, praesentium, rerum aliquam nam distinctio quam voluptate asperiores quas inventore molestiae amet quod eveniet."
      />
    </div>
  )
}

