import { Header } from "./components/Header";
import Post from "./Post";

import "./global.css";



function App() {
  return (
    <div>
      <Header/>
      <Post author="Josiane Rocha" content="Lorem ipsum dolor sit" />

      <Post author="Guilherme Santos" content="Lorem ipsum dolor sit" />
    </div>
  );
}

export default App;
