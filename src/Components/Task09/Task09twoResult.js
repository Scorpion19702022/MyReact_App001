import React, { useContext } from 'react'

import styles from './Task09twoResult.module.css'
import Task09twoContext from './Context/Task09twoContext'

const Task09twoResult = () => {
	const { carInfo, info, handleDeleteCar, handleSortFromYoung, handleSortFromOld } = useContext(Task09twoContext)

	const resultsCarInfo = carInfo.map(item => (
		<div className={styles.box_result} key={item.id}>
			<ul className={styles.result_lists}>
				<li className={styles.car}>
					Marka: <span className={styles.car_name}>{item.carName}</span>
				</li>
				<li className={styles.year}>
					Wiek: <span className={styles.car_age}>{item.carAge}</span>
				</li>
				<li className={styles.btns_list}>
					<button className={styles.btn_list} onClick={() => handleDeleteCar(item.id)}>
						usuń
					</button>
				</li>
			</ul>
		</div>
	))

	return (
		<div className={styles.wrapper_result}>
			<h1 className={styles.heading_list}>Ilość samochodów: {carInfo.length}</h1>
			<div className={styles.box_info}>
				<p className={styles.info}>INFORMACJA:</p>
				<p className={styles.info}>{info}</p>
			</div>
			<div className={styles.btns_sort}>
				<button className={styles.btn_sort} onClick={handleSortFromOld}>
					sortuj od najstarszego
				</button>
				<button className={styles.btn_sort} onClick={handleSortFromYoung}>
					sortuj od najmłodszego
				</button>
			</div>
			<div className={styles.box_results}>{resultsCarInfo}</div>
		</div>
	)
}

export default Task09twoResult
