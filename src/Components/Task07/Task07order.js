import React, { useContext } from 'react'

import styles from './Task07order.module.css'
import Task07context from './Context/Task07context'

const Task07order = () => {
	const { quanity, yourProduct } = useContext(Task07context)

	return (
		<div className={styles.wrapper_order}>
			<h1 className={styles.heading_order}>Twoja karta menu</h1>
			<div className={styles.card_menu}>
				<h3 className={styles.quanity_menu}>
					Wielkość zamówienia:{' '}
					<span className={styles.quanity_span}>
						{quanity} {quanity === 0 || quanity >= 5 ? 'pozycji' : 'pozycje'}
					</span>
				</h3>
				<h4 className={styles.your_menu}>Twoje zamówienie:</h4>
				<div></div>
			</div>
		</div>
	)
}

export default Task07order
