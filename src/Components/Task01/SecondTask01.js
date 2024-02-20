import { useContext } from 'react'
import styles from './Task01.module.css'
import Task01Context from './Context/Task01Context'

const SecondTask01 = () => {
	const { results, handleCalculate, handleDeleteResults, success, limitCount } = useContext(Task01Context)

	return (
		<div className={styles.wrapper_second_task01}>
			<h1 className={styles.heading_second_task01}>Sprawdż ilość kliknięć</h1>
			<h3 className={styles.limitCount}>{limitCount}</h3>
			<div className={styles.btns_second_task01}>
				<button className={styles.btn_second_task01_sub} onClick={() => handleCalculate('sub', '10')}>
					-10
				</button>
				<button className={styles.btn_second_task01_sub} onClick={() => handleCalculate('sub', '1')}>
					-1
				</button>
				<button className={styles.btn_second_task01_reset} onClick={handleDeleteResults}>
					reset
				</button>
				<button className={styles.btn_second_task01_add} onClick={() => handleCalculate('add', '1')}>
					+1
				</button>
				<button className={styles.btn_second_task01_add} onClick={() => handleCalculate('add', '10')}>
					+10
				</button>
			</div>
			<div className={styles.box_results_task01}>
				<h4 className={styles.heading_result_click}>
					Liczba kliknięć: <span className={styles.span_result_click_task01}>({results.resultsClick})</span>{' '}
				</h4>
				<h4 className={styles.heading_result}>
					Wynik: <span className={styles.span_result_task01}>({results.count})</span>{' '}
				</h4>
				<h2 className={styles.success_result_task01}>{success}</h2>
			</div>
		</div>
	)
}

export default SecondTask01
