import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {

	const [ menu, setMenu ] = useState(false);

	const showMenu = () => {
		setMenu(!menu);
		localStorage.clear();
	}

	return (
		<div className="navbar">
			<div className="leftSide">
				<Link className="link" to="/">
					<HomeIcon />
				</Link>
			</div>
			{/* <div className="center">
				<Link to="/">
					<img src={Logo} alt="Logo" />
				</Link>	
			</div> */}
			<div className="rightSide">
				<MenuIcon onClick={showMenu} />
			</div>
			<nav className={menu ? 'nav-menu active' : 'nav-menu'}>
				<ul>
					<li>
						<Link to="/Three_Card_Poker" onClick={showMenu}> 3 Card Poker </Link>
					</li>
				</ul>
			</nav>			
		</div>
	)	
}

export default Navbar;