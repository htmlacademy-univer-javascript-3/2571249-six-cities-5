import {Link, useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {fetchOffersAction, loginAction} from '../../store/api-actions.ts';


const isPasswordValid = (password: string): boolean =>
  /\d/.test(password) &&
  /[a-zA-Z]/.test(password) &&
  !/\s/.test(password);


export function LoginPage() {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (email !== '' && isPasswordValid(password)) {
      dispatch(loginAction({email: email, password: password})).then(() => {
        dispatch(fetchOffersAction());
        navigate(AppRoute.Main);
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleLogin}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email"
                  onChange={(evt) => setEmail(evt.target.value)}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(evt) => setPassword(evt.target.value)}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{activeCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
