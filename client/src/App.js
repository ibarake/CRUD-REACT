import logo from './logo.svg';
import './App.css';
import userList from './components/userList.js'
import addUser from './components/addUser.js'
import editUser from './components/editUser.js'


function App() {
  return (
    <div className="App">
      <h1>CRUD with MERN</h1>
      <userList/>
      <addUser/>
      <editUser/>
    </div>
  );
}

export default App;
