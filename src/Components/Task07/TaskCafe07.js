import React, { useContext } from 'react'

import styles from './Task07cafe.module.css'
import Task07context from './Context/Task07context'

const TaskCafe07 = () => {
	const { cafeProducts } = useContext(Task07context)

	console.log(cafeProducts)

	const cafeMenu = cafeProducts.map(item => (
		<div key={item.id} className={styles.menu_cafe}>
			<h1 className={styles.menu_product}>{item.product}</h1>
			<img className={styles.menu_img} src={item.img} alt='' />
			<h3 className={styles.menu_price}>Cena: {item.price}</h3>
			<button className={styles.menu_btn}>Zamów</button>
		</div>
	))

	return <div className={styles.wrapper_cafe}>{cafeMenu}</div>
}

export default TaskCafe07
