import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './Container/UserList';
import UsersData from './Container/UsersData';
import AddUser from './Container/AddUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/user-list' element={<UserList />} />
        <Route path='/user/:id' element={<UsersData />} />
        <Route path='/add-user' element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
