import React, { useContext } from 'react'
import styles from './Task01.module.css'
import Task01Context, { AddFunctionsTask01Provider } from './Context/Task01Context'

const Task01 = () => {
	const handleClickAddTextInTask01a = useContext(Task01Context)

	return (
		<div className={styles.wrapper_task01}>
			<h1 className={styles.heading_page}>Task01</h1>
			<AddFunctionsTask01Provider>
				<div className={styles.box_task01_a}>
					<div className={styles.box_task01_a1}>
						<h2 className={styles.heading_task01_a1}>Wyloguj literę</h2>
						<div className={styles.inputs_task01_a1}>
							<input className={styles.input_task01_a1} type='text' />
							<button className={styles.btn_task01_a1} onClick={handleClickAddTextInTask01a}>
								Kliknij
							</button>
						</div>
						<h3 className={styles.result_task01_a1}>
							Twój wpis: <span className={styles.result_task01_a1_span}></span>
						</h3>
					</div>
				</div>
			</AddFunctionsTask01Provider>
		</div>
	)
}

export default Task01
