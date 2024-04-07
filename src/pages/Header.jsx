import { Outlet, Link } from 'react-router-dom'
import '../style/header.css'


const Header = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='menu-container'>
          <Link to='/' style={{ color: 'black' }}>Home</Link>
        </div>
        <div className='menu-container'>
          <Link to='/about' style={{ color: 'black' }}>About</Link>
        </div>
        <div className='menu-container'>
          <Link to='/gallery' style={{ color: 'black' }}>Gallery</Link>
        </div>
      </div>
      <Outlet />
    </nav>
  )
}

export default Header