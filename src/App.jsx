import Background from "./components/BG/Background";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Background />
      <div className="app_content">
        <Navbar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
