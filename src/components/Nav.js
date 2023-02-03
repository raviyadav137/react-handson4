import React,{Link} from 'react-router-dom'
function Nav(){
    return(
      <div>
            <nav className="nav">
                <Link className="link" to="/">
                    Home
                </Link>
                 
                <Link className="link" to="/student"> 
                    Students
                </Link>
            
                <Link className="link" to="/contact">
                    Contact Us
                </Link>
               </nav>
        </div>
    )
}
export default Nav