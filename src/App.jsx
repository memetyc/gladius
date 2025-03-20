import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import UserLayout from "./components/UserLayout"

function App() {
  
  return (
    <>
    
      <Routes>
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
 
      </Routes>
    </>
  )
}

export default App
