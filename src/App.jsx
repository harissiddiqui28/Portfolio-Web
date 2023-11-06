
import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ImageGrid from './components/ImageGrid'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import OverviewThree from './components/OverviewThree'
import Overviewtwo from './components/Overviewtwo'
import VideoPlayer from './components/Video'



import Content from './components/Content'


function App() {
 
  return (
  <>

  <Navbar/>
  <Hero/>
  <Content/>
 <VideoPlayer/>
 <Overview/>
 <Cards/>
 <Overviewtwo/>
 <ImageGrid/>
 <OverviewThree/>
 <Footer/>
  
  </>
  )
}

export default App
