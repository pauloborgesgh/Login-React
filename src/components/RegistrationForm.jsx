// components/RegistrationForm.js
import  { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [street, setStreet] = useState('');
  // const [number, setNumber] = useState('');
  const [password, setpassowrd] = useState('');
  const [re_password, setre_passowrd] = useState('');
  // const [neighborhood, setNeighborhood] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          re_password
          // number,
          // neighborhood,
          // city,
          // state,

        }),
      });
      if (response.ok) {
        // Aqui você pode adicionar lógica adicional após o registro bem-sucedido
        window.location.href = '/';
        console.log('Registration successful');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      {error && <p>{error}</p>}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* <div>
        <label>Street:</label>
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />

      </div> */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassowrd(e.target.value)}
          required
        />
      </div>

      <div>
        <label> Repitir Password:</label>
        <input
          type="password"
          value={re_password}
          onChange={(e) => setre_passowrd(e.target.value)}
          required
        />
      </div>



      {/* <div>
        <label>Number:</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div> 
      <div>
        <label>Neighborhood:</label>
        <input
          type="text"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          required
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </div> */}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
