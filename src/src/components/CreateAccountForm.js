import React, { useState } from 'react';
import { createAccount } from '../api';
import '../styles.css';

const CreateAccountForm = () => {
    const [customerID, setCustomerID] = useState('');
    const [initialCredit, setInitialCredit] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await createAccount({
                customerID,
                initialCredit: Number(initialCredit),
            });
            setResponse(`Account created! ID: ${result.data.accountID}`);
        } catch (error) {
            setResponse(`Error: ${error.response?.data?.error || 'Something went wrong'}`);
        }
    };

    return (
        <div className="create-account-container">
            <h2 className="create-account-heading">Create Account</h2>
            <form className="create-account-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Customer ID"
                    value={customerID}
                    onChange={(e) => setCustomerID(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Initial Credit"
                    value={initialCredit}
                    onChange={(e) => setInitialCredit(e.target.value)}
                    required
                />
                <button type="submit">Create Account</button>
            </form>
            {response && <p className="create-account-response">{response}</p>}
        </div>
    );
};

export default CreateAccountForm;
