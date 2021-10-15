import { appWithTranslation } from 'next-i18next'
// import '../styling/index.styl'
const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default appWithTranslation(MyApp)
