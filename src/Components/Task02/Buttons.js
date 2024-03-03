import React from 'react'

import styles from './Buttons.module.css'

const Buttons = ({ selectPeople, selectWomen, selectMen, selectAll }) => {
	return (
		<div className={styles.wrapper_btns_action}>
			<button
				className={!selectWomen ? styles.btn_show_women : styles.btn_show_women_active}
				onClick={() => selectPeople('kobieta')}
			>
				Pokaż kobiety
			</button>
			<button
				className={!selectMen ? styles.btn_show_men : styles.btn_show_men_active}
				onClick={() => selectPeople('mężczyzna')}
			>
				Pokaż mężczyzn
			</button>
			<button
				className={!selectAll ? styles.btn_show_all : styles.btn_show_all_active}
				onClick={() => selectPeople('all')}
			>
				Pokaż wszystkich
			</button>
		</div>
	)
}

export default Buttons
