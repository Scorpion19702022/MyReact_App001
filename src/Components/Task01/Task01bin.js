import { useContext } from 'react'
import styles from './Task01.module.css'

const Task01bin = () => {
	const {} = useContext

	return (
		<div className={styles.wrapper_bin}>
			<h1 className={styles.heading_bin}>Koszyk</h1>
			<div className={styles.btns_bin}>
				<button className={styles.btn_bin_subtraction}>-</button>
				<span className={styles.btn_state}>7</span>
				<button className={styles.btn_bin_add}>+</button>
			</div>
		</div>
	)
}

export default Task01bin
