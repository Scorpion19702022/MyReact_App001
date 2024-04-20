import React, { useContext } from 'react'

import styles from './Task09oneResult.module.css'
import Task09oneContext from './Context/Task09oneContext'

const Task09oneResult = () => {
	const { person } = useContext(Task09oneContext)

	const personList = person.map(item => (
		<div className={styles.person} key={item.id}>
			<ul className={styles.person_list}>
				<li className={styles.person_name}>
					{item.firstName} {item.lastName}
				</li>
				<li className={styles.person_age}>{item.age}</li>
				<li className={styles.person_btns}>
					{' '}
					<button className={styles.person_btn}>usuń</button>
				</li>
			</ul>
		</div>
	))

	return (
		<div className={styles.wrapper_result}>
			<h2 className={styles.quantity}>ilość osób: {person.length}</h2>
			<div className={styles.errors}>
				<p className={styles.error_empty}></p>
				<p className={styles.error_quantity}></p>
			</div>
			<div className={styles.result}>{personList}</div>
		</div>
	)
}

export default Task09oneResult
