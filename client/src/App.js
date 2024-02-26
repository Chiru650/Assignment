import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from "./pages/Home";
import View from "./pages/View";
//import AddEdit from "./pages/AddEdit";

const Homes = () => <div>Home Component</div>;
//const AddEdits = () => <div>AddEdit Component</div>;
const Views = () => <div> View Component</div>
export { Homes, Views };

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position="top-center"/>
      <Routes>
        <Route  exact path="/" element= {<Home />} />
        <Route path = "/view/:id" element = {<View/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
