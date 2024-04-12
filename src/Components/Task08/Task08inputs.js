import React, { useContext } from 'react'

import styles from './Task08inputs.module.css'
import Task08context from './Context/Task08context'
import Task08do from './Task08do'
import Task08done from './Task08done'

const Task08inputs = () => {
	const {
		inputTask,
		priority,
		date,
		taskDoLength,
		textLength,
		taskDoneList,
		handleChangeInputTask,
		handleChangePriority,
		handleChangeDate,
		handleAddTaskDo,
	} = useContext(Task08context)

	return (
		<div className={styles.wrapper_main}>
			<div className={styles.box_inputs}>
				<div className={styles.do_task_quantity}>
					<h1 className={styles.heading_do_quantity}>Ilość zadań do wykonania</h1>
					<h2 className={styles.results_quantity}>{taskDoLength}</h2>
				</div>
				<div className={styles.inputs_todo}>
					<div className={styles.inputs}>
						<div className={styles.box_input}>
							<label className={styles.label}>Wpisz zadanie:</label>
							<input className={styles.inp} type='text' value={inputTask} onChange={handleChangeInputTask} />
							<p className={styles.task_length}>{textLength}</p>
						</div>
						<div className={styles.box_checkbox}>
							<label className={styles.check_label}>Priorytet:</label>
							<input className={styles.check_box} type='checkbox' checked={priority} onChange={handleChangePriority} />
						</div>
					</div>
					<div className={styles.box_date}>
						<div className={styles.date}>
							<label className={styles.date_label}>Data zrobienia:</label>
							<input className={styles.inp_date} type='date' value={date} min={date} onChange={handleChangeDate} />
						</div>
					</div>
					<button className={styles.btn_add} onClick={handleAddTaskDo}>
						Dodaj
					</button>
				</div>
				<div className={styles.do_task_quantity}>
					<h1 className={styles.heading_do_quantity}>Ilość zadań wykonanych</h1>
					<h2 className={styles.results_quantity}>{taskDoneList.length}</h2>
				</div>
			</div>
			<div className={styles.tasks}>
				<Task08do />
				<Task08done />
			</div>
		</div>
	)
}

export default Task08inputs
