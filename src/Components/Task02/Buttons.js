import React from 'react'

import styles from './Buttons.module.css'

const Buttons = ({ selectPeople }) => {
	return (
		<div className={styles.wrapper_btns_action}>
			<button className={styles.btn_show_women} onClick={() => selectPeople('kobieta')}>
				Pokaż kobiety
			</button>
			<button className={styles.btn_show_men} onClick={() => selectPeople('mężczyzna')}>
				Pokaż mężczyzn
			</button>
			<button className={styles.btn_show_all} onClick={() => selectPeople('all')}>
				Pokaż wszystkich
			</button>
		</div>
	)
}

export default Buttons
