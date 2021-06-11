import { useState } from 'react';
import axios from 'axios';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': 'd667ac24-affc-4f38-b799-8d169c3b5e85', 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Login</h1>
        <div className="input">
          <form onSubmit={handleSubmit}>

            <div className="inputBox">
              <label>Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Nickname" required />
            </div>

            <div className="inputBox">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" maxLength="22" placeholder="●●●●●●" required />
            </div>

            <div className="inputBox">
              <input type="submit" name="" value="Sign In" />
            </div>

          </form>

        </div>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;
