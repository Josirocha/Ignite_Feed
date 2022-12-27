import { Header } from "./components/Header";
import Post from "./Post";

import styles from './app.module.css'

import "./global.css";
import { Sidebar } from "./components/Sidebar";



function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Josiane Rocha" content="Lorem ipsum dolor sit" />

          <Post author="Guilherme Santos" content="Lorem ipsum dolor sit" />
        </main>
      </div>
    </div>
  );
}

export default App;
