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
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
