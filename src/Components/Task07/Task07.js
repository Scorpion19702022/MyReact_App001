import React from 'react'

import Bar from './assets/bar.jpg'

import styles from './Task07.module.css'
import { ActionCaffee } from './Context/Task07context'
import TaskCafe07 from './TaskCafe07'

const Task07 = () => {
	return (
		<div className={styles.wrapper_task07}>
			<div className={styles.box_header}>
				<h1 className={styles.heading_header}>Coffee & Snack</h1>
				<div className={styles.text_shadow}></div>
				<div className={styles.heading_line}></div>
				<div className={styles.img_header}>
					<img className={styles.img_bar} src={Bar} alt='zdjęcie baru' />
				</div>
				<div className={styles.shadow_header}></div>
			</div>
			<ActionCaffee>
				<TaskCafe07 />
			</ActionCaffee>
		</div>
	)
}

export default Task07
