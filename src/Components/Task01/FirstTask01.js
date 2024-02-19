import { useContext } from 'react'
import styles from './Task01.module.css'
import Task01Context from './Context/Task01Context'

const FirstTask01 = () => {
	const { handleClickAddTextInTask01a, handleChange, textTask01a, textView, changeState } = useContext(Task01Context)

	return (
		<div className={styles.box_task01_a}>
			<div className={styles.box_task01_a1}>
				<h2 className={styles.heading_task01_a1}>Wyloguj literę</h2>
				<h2 className={styles.heading_task01_a1}>ilość liter: {textTask01a.length}</h2>
				<div className={styles.inputs_task01_a1}>
					<input className={styles.input_task01_a1} type='text' value={textTask01a} onChange={handleChange} />
					<button
						className={!changeState ? styles.btn_task01_a1 : styles.btn_task01_a1_sub}
						onClick={handleClickAddTextInTask01a}
					>
						{!changeState ? 'zobacz' : 'usuń'}
					</button>
				</div>
				{textTask01a.length >= 20 ? <h4 className={styles.task01_length}>wpisałeś za dużo zaków</h4> : null}
				<h3 className={styles.result_task01_a1}>
					Twój wpis: <span className={styles.result_task01_a1_span}>{textView}</span>
				</h3>
				{textView !== '' ? <p className={styles.task01_success}>zadanie zakończoe sukcesem</p> : null}
			</div>
		</div>
	)
}

export default FirstTask01
