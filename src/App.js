import "./App.css";
import { Header, Playlist } from "./Header";
import { Malayalam, Hindi, Tamil, English } from "./Movies";

function App() {
  return (
    <div>
      <div>
      <Header />
      </div>
      <div className="movies-area">
        <Malayalam />
        <Hindi />
        <Tamil />
        <English />
      </div>
      <div className="screen-list">
        <Playlist />
      </div>
    </div>
    
  );
}

export default App;
