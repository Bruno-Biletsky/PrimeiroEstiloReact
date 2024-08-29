import { Link } from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'
const Nav=()=>{
    return(
        <>
        <NavStyle>
            <section className='nav'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/novapagina' className='link'>Pag2</Link>
            </section>
        </NavStyle>
        
   
        </>
    )
}

export default Nav