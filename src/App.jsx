import Background from "./components/BG/Background";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Background />
      <div className="app_content">
        <Navbar />
      </div>
    </>
  );
}

export default App;
