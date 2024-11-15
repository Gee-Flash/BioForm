import { useState } from 'react';

function UserForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted:\nUsername: ${username}\nEmail: ${email}`);
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='text-lg font-bold'>Username:</label>
                    <input className='border-4 border-black border-solid rounded-md p-2'
                        type="text"
                        name='UserName'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </div>
                <div>
                    <label className='text-lg font-bold'>Email:</label>
                    <input className='border-4 border-black border-solid rounded-md p-2'
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
                <button className='bg-blue-500 text-white p-2 rounded md' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
