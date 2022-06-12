import '../styles/globals.css';
import { AppProps } from 'next/app';
import { createStore } from 'redux';
import allReducers from '../redux/allReducers';
import { Provider } from 'react-redux';

// provider wraps all app and share redux states
let store = createStore(allReducers);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <nav className='text-primary-two bg-primary-one sm:text-primary-one sm:bg-primary-two'>Navigation</nav>
        <Component {...pageProps} />
        <footer>bottom</footer>
      </Provider>
    </>
  );
}

export default MyApp;
