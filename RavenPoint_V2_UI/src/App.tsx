import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import { DataTable } from './components/DataTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <DataTable />
    </>
  )
}

export default App
