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
			<div className={styles.box_results_task01}>
				<h4 className={styles.heading_result_click}>
					Liczba kliknięć: <span className={styles.span_result_click_task01}></span>{' '}
				</h4>
				<h4 className={styles.heading_result}>
					Wynik: <span className={styles.span_result_task01}></span>{' '}
				</h4>
			</div>
		</div>
	)
}

export default SecondTask01
