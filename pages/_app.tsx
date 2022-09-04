import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import App from 'next/app'
import ThemeWrapper from '../utils/LayoutWrapper'
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps,...other }: AppProps) {
  return (
  <Provider store={store}>
    <ThemeWrapper>
      <Component {...pageProps} {...other}/>
    </ThemeWrapper>
  </Provider>
  )
}

MyApp.getInitialProps=async(appContext)=>{
  const {lang}= store.getState()
  const appProps = await App.getInitialProps(appContext)
  return {...appProps,lang}
}

// translate 
export default appWithTranslation(MyApp);
