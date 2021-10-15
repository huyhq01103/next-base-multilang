import Link from 'next/link'
import { useRouter } from 'next/router'
// import '../styling/index.styl'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Homepage = () => {

  const router = useRouter()
  const { t } = useTranslation('common')
  const abc = t('array', { returnObjects: true });
  console.log(abc)
  return (
    <>
      <main>
       
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <Link
            href='/'
            locale={router.locale === 'en' ? 'de' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
        {t('array', { returnObjects: true }).map((item) => (
          <div>{item.name}</div>
        ))}
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Homepage
