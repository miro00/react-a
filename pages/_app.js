import "normalize.css"
import "$styles/global.scss"
import "$styles/modal.scss"
import "$styles/create-modal.scss"
import store from "store"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
