import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'



const Header = ({ title, onAdd, showAdd }) => {
 const location = useLocation()
  return (
      <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (<Button
        color={showAdd ? 'Green' : 'Blue'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd} />)}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Manager'
}

Header.propTypes = {
  title:PropTypes.string.isRequired, 
}

// const headingStyle = {
//     textAlign: 'center',
//     color: 'orange',
//     backgroundColor: 'teal'
// }

export default Header