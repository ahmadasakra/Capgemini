import React from 'react';
import CreateAccountForm from './components/CreateAccountForm';
import UserInfo from './components/UserInfo';
import './styles.css';

function App() {
    return (
        <div className="app-container">
            <h1 className="app-heading">Banking App</h1>
            <CreateAccountForm />
            <hr className="app-divider" />
            <UserInfo />
        </div>
    );
}

export default App;
