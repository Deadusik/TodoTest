import Navbar from "./components/Navbar"
import AppRouter from "./router/AppRouter"
import { SPACE } from "./utils/constants"

const appStyles = {
  wrapper: [
    'px-20',
    'pt-10'
  ].join(SPACE)
}

function App() {
  return (
    <>
      <Navbar />
      <div className={appStyles.wrapper}>
        <AppRouter />
      </div>
    </>
  )
}

export default App
