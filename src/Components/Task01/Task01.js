import React, { useContext } from 'react'
import styles from './Task01.module.css'
import Task01Context, { AddFunctionsTask01Provider } from './Context/Task01Context'

const Task01 = () => {
	const textTask01a = useContext(Task01Context)

	console.log(textTask01a)

	return (
		<AddFunctionsTask01Provider>
			<div className={styles.wrapper_task01}>
				<h1 className={styles.heading_page}>Task01</h1>
				<div className={styles.box_task01_a}>
					<div className={styles.box_task01_a1}>
						<h2 className={styles.heading_task01_a1}>Wyloguj literę</h2>
						<div className={styles.inputs_task01_a1}>
							<input className={styles.input_task01_a1} type='text' value={textTask01a} />
							<button className={styles.btn_task01_a1}>Kliknij</button>
						</div>
						<h3 className={styles.result_task01_a1}>
							Twój wpis: <span className={styles.result_task01_a1_span}></span>
						</h3>
					</div>
				</div>
			</div>
		</AddFunctionsTask01Provider>
	)
}

export default Task01
