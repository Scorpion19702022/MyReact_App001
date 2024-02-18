import styles from './Task01.module.css'

const SecondTask01 = () => {
	return (
		<div className={styles.wrapper_second_task01}>
			<h1 className={styles.heading_second_task01}>Sprawdż ilość kliknięć</h1>
			<div className={styles.btns_second_task01}>
				<button className={styles.btn_second_task01_sub}>-1</button>
				<button className={styles.btn_second_task01_add}>+1</button>
				<button className={styles.btn_second_task01_reset}>reset</button>
			</div>
		</div>
	)
}

export default SecondTask01
