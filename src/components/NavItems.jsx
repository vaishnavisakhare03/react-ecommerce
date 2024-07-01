import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png'
import { AuthContext } from '../contexts/AuthProvider';

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // authinfo
    const {user, loading} = useContext(AuthContext)
    console.log(user)
    // console.log(user.photoURL)

    // addevent listener
    // This is typically used to make navigation headers stay at the top of the page while scrolling.
    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false);
        }
    })

    if (loading) {
        return <div>Loading...</div>; 
    }

    //logout
    const { users, logOut } = useContext(AuthContext);

  return (
    // The <header> element dynamically applies the header-fixed and fadeInUp classes based on the headerFixed state.
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        {/* header top start */}
        {/* The <div> element conditionally applies the open class based on the socialToggle state. */}
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className="container">
                <div className="header-top-area">
                    {/* <Link to="/signup" className='lab-btn me-3'>
                        <span>Create Account</span>
                    </Link>
                    <Link to="/login">Log in</Link> */}

                        {!user ? (
                            <>
                                <Link to="/sign-up" className='lab-btn me-3'>
                                    <span>Create Account</span>
                                </Link>
                                <Link to="/login">Log in</Link>
                            </>
                        ) : (
                            <div className="user-info p-2">
                                <img src={user.photoURL} alt="" className="user-image" />
                                <span className='p-4'>{user.email || 'User'}</span>
                                <button onClick={logOut} className='btn btn-danger'>Logout</button>
                            </div>
                        )}
                </div>
            </div>
        </div>

        {/* header bottom */}
        {/* className="": Use for static, unchanging class names. */}
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    {/* logo */}
                    <div className="logo-search-acte">
                        <div className="logo">
                            <Link to={"/"}>
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                    </div>

                    {/* menu area */}
                    <div className="menu-area">
                        <div className="menu">
                        {/* className={``}: Use for dynamic class names that may change based on conditions, allowing you to include JavaScript expressions within the class assignment. */}
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* sign in & log in */}
                        {/* <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to="login" className='d-none d-md-block'>Log In</Link> */}

                            {!user ? (
                                <>
                                    <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                                    <Link to="/login" className='d-none d-md-block'>Log In</Link>
                                </>
                            ) : (
                                <div className="user-info d-none d-md-block">
                                    <img src={user.photoURL} alt="" className="user-image" />
                                    <span className='p-4'>{user.email || 'User'}</span>
                                    <button onClick={logOut} className='btn btn-danger'>Logout</button>
                                </div>
                            )}

                        {/* menu toggler */}
                        <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* social toggler */}
                        <div className="ellepsis-bar d-md-none"
                        onClick={() => setSocialToggle(!socialToggle)}
                        >
                            <i className="icofont-info-square"></i>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems