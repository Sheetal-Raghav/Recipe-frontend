import {Route,Routes,Navigate, Form} from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const user=localStorage.getItem("token")
  return (
    <div className="App">
        <Routes>
            {user && <Route path="/" exact element={<Main/>}/>}
            <Route path="/signup" exact element={<Signup/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path="/" element={<Navigate replace to="/login"/>}/>
        
        </Routes>
    </div>
  );
}

export default App;
