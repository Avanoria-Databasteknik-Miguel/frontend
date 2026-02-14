import { Outlet } from 'react-router-dom'
import NavBar from '../navbar/navbar'

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default AppLayout