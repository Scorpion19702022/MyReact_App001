import React, { useContext } from 'react'

import styles from './Task07order.module.css'
import Task07context from './Context/Task07context'

const Task07order = () => {
	const { quanity, yourProduct, handleDeleteOrder, cost } = useContext(Task07context)

	const menuOrder = yourProduct.map(item => {
		return (
			<ul className={styles.order_lists} key={item.id}>
				<li className={styles.order_list}>
					{item.product}, {item.price} zł
					<button className={styles.btn_substract} onClick={() => handleDeleteOrder(item.id)}>
						-
					</button>
				</li>
			</ul>
		)
	})

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
				<div className={styles.your_order}>{menuOrder}</div>
			</div>
			<div className={styles.box_costs}>
				<h3 className={styles.cost}>
					Całkowity koszt zamówienia: <span className={styles.span_cost}>{cost}</span> zł
				</h3>
			</div>
			<button className={styles.clean_all_order}>resetuj całe zamówienie</button>
		</div>
	)
}

export default Task07order
