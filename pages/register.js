import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { registerUser } from '../utils/data/AuthManager';

function Home({ setToken }) {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const bio = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const passwordDialog = useRef();
  const navigate = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        bio: bio.current.value,
      };

      registerUser(newUser).then((res) => {
        if ('valid' in res && res.valid) {
          setToken(res.token);
          navigate.push('/');
        }
      });
    } else {
      passwordDialog.current.showModal();
    }
  };

  return (
    <section className="columns is-centered">
      <form className="column is-two-thirds" onSubmit={handleRegister}>
        <h1 className="title">Rare Publishing</h1>
        <p className="subtitle">Create an account</p>
        <div className="field">
          <label className="label">
            First Name <input className="input" type="text" ref={firstName} />
          </label>
        </div>

        <div className="field">
          <label className="label">
            Last Name <input className="input" type="text" ref={lastName} />
          </label>
        </div>

        <div className="field">
          <label className="label">
            Username <input className="input" type="text" ref={username} />
          </label>
        </div>

        <div className="field">
          <label className="label">
            Email <input className="input" type="email" ref={email} />
          </label>
        </div>

        <div className="field">
          <label className="label">
            Password <input className="input" type="password" placeholder="Password" ref={password} /> <input className="input" type="password" placeholder="Verify Password" ref={verifyPassword} />
          </label>
        </div>

        <div className="field">
          <label className="label">
            Bio <textarea className="textarea" placeholder="Tell us about yourself..." ref={bio} />
          </label>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">
              Submit
            </button>
          </div>
          <div className="control">
            <Link href="/login" className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}

Home.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Home;
