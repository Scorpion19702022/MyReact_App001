import React from 'react'

// import styles from './App.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavLinks from '../Components/NavLink/NavLinks'
import Home from '../Components/Home/Home'
import Task01 from '../Components/Task01/Task01'
import Task02 from '../Components/Task02/Task02'
import Task03 from '../Components/Task03/Task03'
import Task04 from '../Components/Task04/Task04'
import Task05 from '../Components/Task05/Task05'
import Task06 from '../Components/Task06/Task06'
import Task07 from '../Components/Task07/Task07'
import Task08 from '../Components/Task08/Task08'
import Task09 from '../Components/Task09/Task09'

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
					<Route path='/Task05' Component={Task05}></Route>
					<Route path='/Task06' Component={Task06}></Route>
					<Route path='/Task07' Component={Task07}></Route>
					<Route path='/Task08' Component={Task08}></Route>
					<Route path='/Task09' Component={Task09}></Route>
				</Routes>
			</section>
		</Router>
	)
}

export default App
