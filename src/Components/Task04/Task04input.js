import React, { useContext } from 'react'

import styles from './Task04input.module.css'
import SalaryContext from './Context/SalaryContext'

const Task04input = () => {
	const { inputValue, handleChangeValueInput, error, handleClickChangeSalary, handleClickClear } =
		useContext(SalaryContext)

	return (
		<div className={styles.wrapper_inputs}>
			<h1 className={styles.heading_input}>Wynagrodzenie minimalne brutto na umowę o pracę wynosi 4242 zł</h1>
			<div className={styles.box_inputs}>
				<div className={styles.box_input}>
					<label className={styles.label_input}>Wpisz swoje wynagrodzenie brutto:</label>
					<input
						className={styles.input_input}
						type='number'
						min={4242}
						value={inputValue}
						onChange={handleChangeValueInput}
					/>
				</div>
				<div className={styles.btns_input}>
					<button className={styles.btn_input} onClick={handleClickChangeSalary}>
						Sprawdź
					</button>
					<button className={styles.btn_input} onClick={handleClickClear}>
						Wyczyść
					</button>
				</div>
			</div>
			<div className={styles.box_errors}>
				<p className={styles.info_errors}>{error}</p>
			</div>
		</div>
	)
}

export default Task04input
