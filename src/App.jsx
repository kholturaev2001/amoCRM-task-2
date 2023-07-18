import Background from "./components/BG/Background";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Background />
      <div className="app_content">
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default App;
