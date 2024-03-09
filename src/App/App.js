import React from 'react'

// import styles from './App.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavLinks from '../Components/NavLink/NavLinks'
import Home from '../Components/Home/Home'
import Task01 from '../Components/Task01/Task01'
import Task02 from '../Components/Task02/Task02'
import Task03 from '../Components/Task03/Task03'
import Task04 from '../Components/Task04/Task04'

const App = () => {
	return (
		<Router>
			<NavLinks />
			<section>
				<Routes>
					<Route path='/' Component={Home}></Route>
					<Route path='/Task01' Component={Task01}></Route>
					<Route path='/Task02' Component={Task02}></Route>
					<Route path='/Task03' Component={Task03}></Route>
					<Route path='/Task04' Component={Task04}></Route>
				</Routes>
			</section>
		</Router>
	)
}

export default App
