import React, { useContext } from 'react'

import styles from './Task07order.module.css'
import Task07context from './Context/Task07context'

const Task07order = () => {
	const { quanity } = useContext(Task07context)

	return (
		<div className={styles.wrapper_order}>
			<h1 className={styles.heading_order}>Twoja karta menu</h1>
			<div className={styles.card_menu}>
				<p className={styles.quanity_menu}>
					Wielkość zamówienia: <span>{quanity}</span>
				</p>
			</div>
		</div>
	)
}

export default Task07order
