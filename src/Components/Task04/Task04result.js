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
							Składka ZUS: <span className={styles.contribution_value}>{contributions.contrZUS} zł</span>{' '}
						</li>
						<li className={styles.contribution}>
							Składka emerytalna: <span className={styles.contribution_value}>{contributions.contrPension} xł</span>{' '}
						</li>
						<li className={styles.contribution}>
							Składka rentowa: <span className={styles.contribution_value}>{contributions.contrDisability} zł</span>{' '}
						</li>
						<li className={styles.contribution}>
							Składka chorobowa: <span className={styles.contribution_value}>{contributions.contrSikness} zł</span>{' '}
						</li>
						<li className={styles.contribution}>
							Składka zdrowotna: <span className={styles.contribution_value}>{contributions.contrHealthy} zł</span>{' '}
						</li>
						<li className={styles.contribution}>
							Podatek PIT: <span className={styles.contribution_value}>{contributions.contrTax} zł</span>{' '}
						</li>
					</ul>
					<p className={styles.sum}>
						Skłdki razem: <span className={styles.contribution_sum}>{sumTax} zł</span>{' '}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Task04result
