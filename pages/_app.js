import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
