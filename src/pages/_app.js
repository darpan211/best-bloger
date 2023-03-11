import '@/styles/globals.css'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import AuthComponent from '@/components/auth'
import { DefaultSeo } from 'next-seo'
import ErrorBoundary from '@/components/error-boundary'
import SEO from '../../next-seo.config'
import Head from './Head'

function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Head />
        <DefaultSeo {...SEO} />
        <AuthComponent>

          <Component {...pageProps} />
        </AuthComponent>
      </Provider>
    </ErrorBoundary>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
