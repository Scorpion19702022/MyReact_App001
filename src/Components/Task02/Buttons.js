import React, { useEffect } from 'react'

import styles from './Buttons.module.css'

const Buttons = ({ selectPeople, selectWomen, selectMen, selectAll }) => {
	let stylesAllView = styles.btn_show_all_active
	let stylesAllNoView = styles.btn_show_all

	useEffect(() => {
		if (selectAll) {
			return stylesAllView
		}

		console.log(selectAll)
	}, [selectAll])

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
			<button className={!selectAll ? stylesAllNoView : stylesAllView} onClick={() => selectPeople('all')}>
				Pokaż wszystkich
			</button>
		</div>
	)
}

export default Buttons
