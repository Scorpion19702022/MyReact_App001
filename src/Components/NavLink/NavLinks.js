import React from 'react'

import { NavLink } from 'react-router-dom'

// import TaskAltIcon from '@mui/icons-material/TaskAlt'

import styles from '../../App/App.module.css'

const NavLinks = () => {
	return (
		<div className={styles.wrapper_nav}>
			<header>
				<nav className={styles.nav}>
					<ul className={styles.nav_links}>
						<li className={styles.link}>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li className={styles.link}>
							<NavLink to='./Task01'>Zadanie 01</NavLink>
						</li>
						<li className={styles.link}>
							<NavLink to='./Task02'>Zadanie 02</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default NavLinks