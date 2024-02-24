import { useContext } from 'react'
import styles from './Task01.module.css'
import Task01Context from './Context/Task01Context'

const Task01bin = () => {
	const { productShop } = useContext(Task01Context)

	return (
		<div className={styles.wrapper_bin}>
			<h1 className={styles.heading_bin}>Koszyk</h1>
			<div className={styles.btns_bin}>
				<button disabled className={styles.btn_bin_subtraction}>
					-
				</button>
				<span className={styles.btn_state}>{productShop.shoppingCart}</span>
				<button className={styles.btn_bin_add}>+</button>
			</div>
		</div>
	)
}

export default Task01bin
