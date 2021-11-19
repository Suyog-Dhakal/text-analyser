import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtil2s" aboutText="AboutTextUtils" />
      <div className="container mb-3">
        <TextForm heading="Enter the text to analyse" />
      </div>
    </>
  );
}

export default App;
