import { Link } from 'react-router-dom'
import aubrey from '../images/aubrey.jpg'

const Header = ( props ) => {

  const style = {
    height: '27vh',
    margin: '5px',
    border: '1px #fff solid',
    display: 'flex',
    flexDirection: 'row',
    background: `url(${aubrey})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '70%',
    position: 'relative'
  }

  return (
    <div style={style}>
    {/* <img src={aubrey}/> */}
<div className="text-right w-100 p-5">
      <Link to='/' className="h1 text-white" style={{ textShadow: '5px 5px 5px #000' }}>{props.name}</Link><br />
      <h4 className="text-white" style={{ cursor: 'pointer', textShadow: '2px 2px 2px #000' }}>web log</h4>
      </div>
    </div>
  )
}

export default Header
