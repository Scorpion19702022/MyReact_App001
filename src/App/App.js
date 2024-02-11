import React from 'react'

import styles from './App.module.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'

import Home from '../Components/Home/Home'
import Task01 from '../Components/Task01/Task01'
import Task02 from '../Components/Task02/Task02'

const App = () => {
	return (
		<Router>
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
			<section>
				<Routes>
					<Route path='/' Component={Home}></Route>
					<Route path='/Task01' Component={Task01}></Route>
					<Route path='/Task02' Component={Task02}></Route>
				</Routes>
			</section>
		</Router>
	)
}

export default App
