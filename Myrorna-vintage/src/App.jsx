import './App.css'
import Header from './Global_components/Header'
import LandingSection from './intro-page/LandingSection'
import Handpicked from './intro-page/Handpicked'
function App() {
  return (
    <div className="App">
      <Header />
      <LandingSection />
      <Handpicked />
    </div>
  )
}
export default App
