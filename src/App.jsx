import { Routes, Route } from 'react-router-dom'
import './index.css'
import Topbar from './components/Topbar'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div>
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}
