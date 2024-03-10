import React, { useContext } from 'react'

import styles from './Task04result.module.css'
import SalaryContext from './Context/SalaryContext'

import Salary from './assets/salary.png'

const Task04result = () => {
	const { error, contributions, finishSalary, sumTax } = useContext(SalaryContext)

	return (
		<div className={styles.wrapper_result}>
			<div className={styles.box_result_salary}>
				<div className={styles.box_img}>
					<img className={styles.img_salary} src={Salary} alt='' />
				</div>
				<h3 className={styles.heading_salary}>Twoje wynagrodzenie netto:</h3>
				<h1 className={styles.result_salary}>{finishSalary}</h1>
				<p className={styles.salary_errors}>{error}</p>
			</div>
			<div className={styles.box_all_info}>
				<h3 className={styles.heading_info}>Składki:</h3>
				<div className={styles.box_contributions}>
					<ul className={styles.contribution_list}>
						<li className={styles.contribution}>
							Składka ZUS: <span className={styles.contribution_value}>{contributions.contrZUS}</span>{' '}
						</li>
						<li className={styles.contribution}>
							Składka emerytalna: <span className={styles.contribution_value}>{contributions.contrPension}</span>{' '}
						</li>
						<li className={styles.contribution}>
							Składka rentowa: <span className={styles.contribution_value}>{contributions.contrDisability}</span>{' '}
						</li>
						<li className={styles.contribution}>
							Składka chorobowa: <span className={styles.contribution_value}>{contributions.contrSikness}</span>{' '}
						</li>
						<li className={styles.contribution}>
							Składka zdrowotna: <span className={styles.contribution_value}>{contributions.contrHealthy}</span>{' '}
						</li>
						<li className={styles.contribution}>
							Podatek PIT: <span className={styles.contribution_value}>{contributions.contrTax}</span>{' '}
							{contributions.contrTax}
						</li>
					</ul>
					<p className={styles.sum}>
						Skłdki razem: <span className={styles.contribution_sum}>{sumTax}</span>{' '}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Task04result
