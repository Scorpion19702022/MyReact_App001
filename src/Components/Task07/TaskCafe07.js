import React, { useContext } from 'react'

import styles from './Task07cafe.module.css'
import Task07context from './Context/Task07context'

const TaskCafe07 = () => {
	const { cafeProducts, table, Test } = useContext(Task07context)

	const cafeMenu = cafeProducts.map(item => (
		<div key={item.id} className={styles.menu_cafe}>
			<h1 className={styles.menu_product}>{item.product}</h1>
			<img className={styles.menu_img} src={item.img} alt='' />
			<h3 className={styles.menu_price}>Cena: {item.price} zł</h3>
			<div className={styles.box_btns}>
				<button className={styles.menu_btn} onClick={() => Test(item.id)}>
					Zamów
				</button>
				<button className={styles.menu_btn}>Cofnij</button>
			</div>
		</div>
	))

	return <div className={styles.wrapper_cafe}>{cafeMenu}</div>
}

export default TaskCafe07
