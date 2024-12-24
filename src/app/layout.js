import './global.css'
import NavBar from "../components/NavBar"
import Provider from '../components/Provider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
