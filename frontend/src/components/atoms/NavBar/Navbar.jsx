import {Link} from 'react-router-dom'
import './Navbar.css'
import firebaseLogo from '../../../assets/logo.png'
export default function Navbar(){
    return (
        <>
            <nav id="nav" className="navbar">
                <div className='navbar-content'>
                    <div className='navbar-items'>
                        <Link to ="/"><img src={firebaseLogo} alt="Firebase Logo"/></Link>
                        <Link to ="/">Docs</Link>
                        <Link to ="/">Support</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}