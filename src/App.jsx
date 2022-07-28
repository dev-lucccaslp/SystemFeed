import { Header } from "./components/header";
import { Post } from "./Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          <Post 
            author= "Lucas"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati provident sit fugiat suscipit dolorum, vel, praesentium, rerum aliquam nam distinctio quam voluptate asperiores quas inventore molestiae amet quod eveniet."
          />

         <Post 
            author= "Diego Fernandes"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam obcaecati provident sit fugiat suscipit dolorum, vel, praesentium, rerum aliquam nam distinctio quam voluptate asperiores quas inventore molestiae amet quod eveniet."
          />
        </main>
      </div>
    </div>
  )
}

