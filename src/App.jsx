import './App.css'
import img from './img/logo.svg'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <div className= 'titleMine'>
        <img src={img} alt='image' />
        <h1>MINE</h1>
      </div>
        <NavBar />
        <Login />
        <Footer />
    </div>
  )
}

export default App
