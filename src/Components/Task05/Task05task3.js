import React, { useContext } from 'react'

import styles from './Task05task3.module.css'
import Task05Context03 from './Context/Task05Context03'

const Task05task3 = () => {
	const {
		yourName,
		infoName,
		yourCity,
		infoCity,
		person,
		infoPerson,
		error,
		handleChangeYourName,
		handleChangeCity,
		handleChangePerson,
		handleClickInfoVacation,
		handleCleanInputs,
	} = useContext(Task05Context03)

	const resultsInfo = {
		name: 'Imię:',
		city: 'Miejscowość:',
		person: 'Byłem:',
		date: 'Data ostatniego pobytu:',
		visits: 'Byłem:',
		rating: 'Ocena pobytu:',
		text: 'Opis pobytu:',
	}

	let minDate = new Date().toISOString().slice(0, 10)

	console.log(yourCity)
	console.log(person)

	return (
		<div className={styles.wrapper_task3_holidays}>
			<h1 className={styles.heading_holidays}>Moje wakacje!</h1>
			<div className={styles.box_inputs}>
				<div className={styles.inputs}>
					<label className={styles.label}>Podaj imię:</label>
					<input className={styles.input} type='text' value={yourName} onChange={handleChangeYourName} />
				</div>
				<div className={styles.box_selects}>
					<div className={styles.selects}>
						<label className={styles.label}>Wybierz miejsce:</label>
						<select className={styles.select} value={yourCity} onChange={handleChangeCity} name='City'>
							<option value='cities'>Wybierz miasto</option>
							<option value='city01'>Dźwirzyno</option>
							<option value='city02'>Ustroie Morskie</option>
							<option value='city03'>Darłówek</option>
							<option value='city04'>Łeba</option>
							<option value='city05'>Władysławowo</option>
							<option value='city06'>Trójmiasto</option>
							<option value='city07'>Przechlewo</option>
							<option value='city08'>Człuchów</option>
							<option value='city09'>Parchowo</option>
							<option value='city10'>Piławki</option>
							<option value='city11'>Wola</option>
							<option value='city12'>Borki</option>
							<option value='city13'>Wawrzkowizna</option>
							<option value='city14'>Jaworznik i okolice</option>
							<option value='city15'>Zakopane</option>
							<option value='city16'>Ustroń</option>
							<option value='city17'>Szklarska Poręba</option>
							<option value='city18'>Dżerba</option>
							<option value='city19'>Costa Brava</option>
							<option value='city20'>Włochy/Sycylia</option>
						</select>
					</div>
					<div className={styles.selects}>
						<label className={styles.label}>Wybierz osoby:</label>
						<select className={styles.select} value={person} onChange={handleChangePerson} name='person'>
							<option value='persons'>Z kim byłeś</option>
							<option value='person01'>sam</option>
							<option value='person02'>z Beatą</option>
							<option value='person03'>z Dorotą</option>
							<option value='person04'>z Aśką</option>
							<option value='person05'>z Rodzicami</option>
							<option value='person06'>z Beatą i z Dorotą</option>
							<option value='person07'>z Dorotą i z Aśką</option>
							<option value='person08'>z Dorotą i z Rodzicami</option>
							<option value='person09'>z Beatą i z Dorotą i z Aśką</option>
						</select>
					</div>
				</div>
				<div className={styles.ratings_and_date_and_amound}>
					<div className={styles.box_date}>
						<label className={styles.label}>Data ostatniego pobytu:</label>
						<input className={styles.date_input} type='date' max={minDate} />
					</div>
					<div className={styles.box_amound}>
						<label className={styles.label}>Ilość wizyt:</label>
						<select className={styles.select} name='amound'>
							<option value='amound'>byłem razy</option>
							<option value='amound01'>1 raz</option>
							<option value='amound02'>2 razy</option>
							<option value='amound03'>3 razy</option>
							<option value='amound04'>4 razy</option>
							<option value='amound05'>5 razy</option>
							<option value='amound06'>wiele razy</option>
						</select>
					</div>
					<div className={styles.box_rating}>
						<label className={styles.label}>Poziom zadowolenia:</label>
						<select className={styles.select} name='rating'>
							<option value='ratings'>Oceń pobyt</option>
							<option value='rating01'>1</option>
							<option value='rating02'>2</option>
							<option value='rating03'>3</option>
							<option value='rating04'>4</option>
							<option value='rating05'>5</option>
						</select>
					</div>
				</div>
				<div className={styles.box_text}>
					<label className={styles.label}>Twój krótki opis:</label>
					<textarea className={styles.textarea} name='text'></textarea>
				</div>
				<div className={styles.box_error}>
					<p className={styles.error}>{error}</p>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn} onClick={() => handleClickInfoVacation(yourCity, infoPerson)}>
						Sprawdź
					</button>
					<button className={styles.btn} onClick={handleCleanInputs}>
						Wyczyść
					</button>
				</div>
			</div>
			<div className={styles.box_results}>
				<h3 className={styles.info_result}>
					{resultsInfo.name} <span className={styles.info_span}>{infoName}</span>
				</h3>
				<h3 className={styles.info_result}>
					{resultsInfo.city} <span className={styles.info_span}>{infoCity}</span>
				</h3>
				<h3 className={styles.info_result}>
					{resultsInfo.person} <span className={styles.info_span}>{infoPerson}</span>
				</h3>
				<h3 className={styles.info_result}>
					{resultsInfo.date} <span className={styles.info_span}></span>
				</h3>
				<h3 className={styles.info_result}>
					{resultsInfo.visits} <span className={styles.info_span}></span>
				</h3>

				<h3 className={styles.info_result}>
					{resultsInfo.rating} <span className={styles.info_span}></span>
				</h3>
				<p className={styles.info_result_text}>{resultsInfo.text}</p>
			</div>
		</div>
	)
}

export default Task05task3
