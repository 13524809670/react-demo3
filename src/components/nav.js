import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/nav.css';

const NavBar=()=>(
    <div className="navMenu">
        <NavLink exact to="/" className="li">A-demo</NavLink>
        <NavLink to="/Bdemo" className="li">B-demo</NavLink>
        <NavLink to="/Cdemo" className="li">C-demo</NavLink>
        <NavLink to="/Ddemo" className="li">D-demo</NavLink>
        <NavLink to="/Edemo" className="li">E-demo</NavLink>
        <NavLink to="/Fdemo" className="li">F-demo</NavLink>
        <NavLink to="/Gdemo" className="li">G-demo</NavLink>
        <NavLink to="/Hdemo" className="li">H-demo</NavLink>
        <NavLink to="/Idemo" className="li">I-demo</NavLink>
        {/* <NavLink to="/Jdemo" className="li">J-demo</NavLink>
        <NavLink to="/Ldemo" className="li">L-demo</NavLink>
        <NavLink to="/Mdemo" className="li">M-demo</NavLink>
        <NavLink to="/Ndemo" className="li">N-demo</NavLink>
        <NavLink to="/Odemo" className="li">O-demo</NavLink>
        <NavLink to="/Pdemo" className="li">P-demo</NavLink>
        <NavLink to="/Qdemo" className="li">Q-demo</NavLink>
        <NavLink to="/Rdemo" className="li">R-demo</NavLink>
        <NavLink to="/Sdemo" className="li">S-demo</NavLink>
        <NavLink to="/Tdemo" className="li">T-demo</NavLink>
        <NavLink to="/Udemo" className="li">U-demo</NavLink>
        <NavLink to="/Vdemo" className="li">V-demo</NavLink>
        <NavLink to="/Wdemo" className="li">W-demo</NavLink>
        <NavLink to="/Xdemo" className="li">X-demo</NavLink>
        <NavLink to="/Ydemo" className="li">Y-demo</NavLink>
        <NavLink to="/Zdemo" className="li">Z-demo</NavLink> */}
    </div>
)
export default NavBar;