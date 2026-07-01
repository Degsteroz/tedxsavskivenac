import { Route, Routes } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { SponsorsPage } from '@/pages/SponsorsPage/SponsorsPage'
import { SPONSORS_PATH } from '@/constants/links'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={SPONSORS_PATH} element={<SponsorsPage />} />
    </Routes>
  )
}

export default App
