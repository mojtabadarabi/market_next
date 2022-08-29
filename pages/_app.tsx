import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import App from 'next/app'
import ThemeWrapper from '../utils/LayoutWrapper'

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
  const appProps = await App.getInitialProps(appContext)
  return {...appProps,lang:'en'}
}

export default MyApp
