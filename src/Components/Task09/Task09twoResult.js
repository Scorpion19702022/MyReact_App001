import React, { useContext } from 'react'

import styles from './Task09twoResult.module.css'
import Task09twoContext from './Context/Task09twoContext'

const Task09twoResult = () => {
	const { carInfo, info } = useContext(Task09twoContext)

	const resultsCarInfo = carInfo.map(item => (
		<div className={styles.box_result} key={item.id}>
			<ul className={styles.result_lists}>
				<li>{item.carName}</li>
				<li>{item.carAge}</li>
				<li>
					<button>usuń</button>
				</li>
			</ul>
		</div>
	))

	return (
		<div className={styles.wrapper_result}>
			<h1 className={styles.heading_list}>Ilość samochodów:</h1>
			<div className={styles.box_info}>
				<p className={styles.info}>INFORMACJA:</p>
				<p className={styles.info}>{info}</p>
			</div>
			<div className={styles.box_result}>{resultsCarInfo}</div>
		</div>
	)
}

export default Task09twoResult
