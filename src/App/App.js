import React from 'react'

// import styles from './App.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../Components/Home/Home'
import Task01 from '../Components/Task01/Task01'
import Task02 from '../Components/Task02/Task02'
import NavLinks from '../Components/NavLink/NavLinks'

const App = () => {
	return (
		<Router>
			<NavLinks />
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
