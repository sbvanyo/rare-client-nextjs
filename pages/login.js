import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { loginUser } from '../utils/data/AuthManager';

function Login({ setToken }) {
  const username = useRef();
  const password = useRef();
  const navigate = useRouter();
  const [isUnsuccessful, setisUnsuccessful] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      password: password.current.value,
    };

    loginUser(user).then((res) => {
      if ('valid' in res && res.valid) {
        setToken(res.token);
        navigate.push('/');
      } else {
        setisUnsuccessful(true);
      }
    });
  };

  return (
    <section className="columns is-centered">
      <form className="column is-two-thirds" onSubmit={handleLogin}>
        <h1 className="title">Rare Publishing</h1>
        <p className="subtitle">Please sign in</p>

        <div className="field">
          <label className="label">
            Username <input className="input" type="text" ref={username} />
          </label>
        </div>

        <div className="field">
          <label className="label">
            Password
            <input className="input" type="password" ref={password} />
          </label>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">
              Submit
            </button>
          </div>
          <div className="control">
            <Link href="/register" className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </div>
        {isUnsuccessful ? <p className="help is-danger">Username or password not valid</p> : ''}
      </form>
    </section>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;
