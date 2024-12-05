import React, { useState } from 'react';
import { getUserInfo } from '../api';
import '../styles.css';

const UserInfo = () => {
    const [customerID, setCustomerID] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetch = async () => {
        try {
            const result = await getUserInfo(customerID);
            setUserData(result.data);
            setError(null);
        } catch (err) {
            setError('User not found');
            setUserData(null);
        }
    };

    return (
        <div className="user-info-container">
            <h2 className="user-info-heading">Get User Info</h2>
            <input
                className="user-info-input"
                type="text"
                placeholder="Customer ID"
                value={customerID}
                onChange={(e) => setCustomerID(e.target.value)}
            />
            <button className="user-info-button" onClick={handleFetch}>
                Fetch User
            </button>
            {error && <p className="user-info-error">{error}</p>}
            {userData && (
                <div className="user-info-details">
                    <h3>User Details</h3>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Surname:</strong> {userData.surname}</p>
                    <p><strong>Balance:</strong> {userData.balance}</p>
                    <h4>Transactions:</h4>
                    <ul>
                        {userData.transactions.map((txn) => (
                            <li key={txn.id} className="user-info-transaction">
                                <strong>ID:</strong> {txn.id}, <strong>Amount:</strong> {txn.amount}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
