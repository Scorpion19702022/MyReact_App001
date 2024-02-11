import React, { useEffect, useState } from 'react'

import styles from './Home.module.css'

const Home = () => {
	const [count, setCount] = useState({
		count: 5,
	})

	useEffect(() => {
		let interval = setInterval(() => {
			setCount({
				count: count.count - 1,
			})
		}, 1000)
		return () => {
			if (count.count <= 0) {
				clearInterval(interval)
				setCount({
					count: '',
				})
			}
		}
	}, [count.count])

	return (
		<div className={styles.wrapper_home}>
			<div className={styles.boxHome_heading}>
				<h1 className={styles.home_heading}>Component Home</h1>
				<h4 className={styles.home_theme}>moje wariacje z przywitaniem aplikacji</h4>
			</div>
			<div className={styles.boxHome_action}>
				<h1 className={styles.home_count}>{count.count}</h1>
			</div>
		</div>
	)
}

export default Home
