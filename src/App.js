import Routes from "./Routes";
import Header from "./layouts/Header";

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
			  <Routes/>
		  </div>
    </div>
  );
}

export default App;
