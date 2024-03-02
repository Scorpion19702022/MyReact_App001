import React from 'react'

import styles from './Buttons.module.css'

const Buttons = () => {
	return (
		<div className={styles.wrapper_btns_action}>
			<button className={styles.btn_show_women}>Pokaż kobiety</button>
			<button className={styles.btn_show_men}>Pokaż mężczyzn</button>
			<button className={styles.btn_show_all}>Pokaż wszystkich</button>
		</div>
	)
}

export default Buttons
