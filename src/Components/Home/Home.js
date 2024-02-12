import React, { useEffect, useState } from 'react'

import styles from './Home.module.css'

const Home = () => {
	const [count, setCount] = useState({
		count: 5,
		text: '',
		styles: null,
	})

	useEffect(() => {
		let interval = setInterval(() => {
			setCount({
				...count,
				count: count.count - 1,
			})
		}, 1000)
		return () => {
			if (count.count <= 0) {
				clearInterval(interval)
				setCount({
					count: '',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aperiam praesentium veniam laudantium obcaecati, reiciendis placeat consequatur! Labore illo laudantium eaque laborum assumenda a nemo debitis voluptas ut atque delectus esse beatae quaerat tenetur, praesentium libero incidunt tempora placeat. Eos dolorum alias ut ducimus itaque dolore tenetur culpa accusantium placeat, earum quod fugit, magnam eveniet aliquam. Impedit quo tempore quisquam odit ullam, unde magnam ipsum eos beatae consequatur voluptatem deserunt?',
					styles: styles.home_text,
				})
			}
		}
	}, [count])

	return (
		<div className={styles.wrapper_home}>
			<div className={styles.boxHome_heading}>
				<h1 className={styles.home_heading}>Component Home</h1>
				<h4 className={styles.home_theme}>moje wariacje z przywitaniem aplikacji</h4>
			</div>
			<div className={styles.boxHome_action}>
				<h1 className={styles.home_count}>{count.count}</h1>

				<p className={count.styles}>{count.text}</p>
			</div>
		</div>
	)
}

export default Home
