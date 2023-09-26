import "./css/style.css";
import Main from "./Pages/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <Header className='App-header' />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
