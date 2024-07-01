import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import News from "./components/news/News"
import Team from "./components/team/Team"
import Us from "./components/us/Us"

function App() {
  return (
    <div className='relative  min-h-screen pb-32'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/us" element={<Us/>}/>
      </Routes>
    </div>
  )
}

export default App