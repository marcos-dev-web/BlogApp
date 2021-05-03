import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header = () => {
	const [menuIsOpened, setMenuIsOpened] = useState(false);

	const toggleMenu = () => {
		setMenuIsOpened(!menuIsOpened);
	}

	const closeMenu = () => {
		setTimeout(() => {
			setMenuIsOpened(false);
		}, 100);
	}

	const getPath = () => {
		const revertString = (str) => {
			let counter = 0;
			const lengthStr = str.length;

			let v = Array.from(lengthStr).fill(0);

			for (let i = lengthStr; i > 0; i--) {
				v[counter] = str[i-1];
				counter++;
			}

			return v.join('');
		}

		const locale = String(window.location.href).replaceAll('#','');
		const localeReverse = revertString(locale).split('');
		const path = localeReverse.splice(0, localeReverse.indexOf('/'));
		
		if (path.length === 0) {
			return "home";
		} else {
			return revertString(path.join(''));
		}
	}

	return (
		<>
			<header className="container">
				<div className="wrapper">
					<h1 className="title_page">
						{getPath()}
					</h1>
					<div className="menu_button" onClick={toggleMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
			{
				menuIsOpened && (
				<nav className="menu_view">
					<ul className="menu_links">
						<li className="menu_link"><Link to="/" className="a" onClick={closeMenu}>Home</Link></li>
						<li className="menu_link"><Link to="/all-posts" className="a" onClick={closeMenu}>All Posts</Link></li>
						<li className="menu_link"><Link to="/posts-by-topic" className="a" onClick={closeMenu}>Posts By Topic</Link></li>
					</ul>
				</nav>
				)
			}
		</>
	);
}

export default Header;
