import { getLanguageTexts, LanguageContext } from '../core/languages/languageContext'
import { useRouter } from '../node_modules/next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
      <LanguageContext.Provider value={getLanguageTexts(router.locale)}>
        <Component {...pageProps} />
      </LanguageContext.Provider>
  )
}

export default MyApp
