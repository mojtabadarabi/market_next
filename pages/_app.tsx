import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider, useSelector} from 'react-redux'
import { store } from '../redux/store'
import App from 'next/app'
import ThemeWrapper from '../utils/LayoutWrapper'
import { appWithTranslation } from 'next-i18next';
import AxiosInstanceProvider from "../httpServices/Axios/AxiosInstanceProvider";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function MyApp({ Component, pageProps,...other }: AppProps) {

  return (

        <Provider store={store}>
          <ThemeWrapper>
              <AxiosInstanceProvider config={
                  {baseURL: 'http://localhost:8080/api'}
              }>
                <Component {...pageProps} {...other}/>
              </AxiosInstanceProvider>
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
