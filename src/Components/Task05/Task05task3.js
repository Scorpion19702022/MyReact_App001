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
		date,
		infoDate,
		visits,
		infoVisits,
		rating,
		infoRating,
		describe,
		infoDescribe,
		error,
		handleChangeYourName,
		handleChangeCity,
		handleChangePerson,
		handleChangeDate,
		handleChangeVisits,
		handleChangeRating,
		handleChangeDescribe,
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

	const cityValueMap = {
		cities: 'wybierz miasto',
		city01: 'Dżwirzyno',
		city02: 'Ustronie Morskie',
		city03: 'Darłówek',
		city04: 'Dąbki',
		city05: 'Łeba',
		city06: 'Władysławowo',
		city07: 'Trójmiasto',
		city08: 'Przechlewo',
		city09: 'Człuchów',
		city10: 'Parchowo',
		city11: 'Piławki',
		city12: 'Wola',
		city13: 'Borki',
		city14: 'Wawrzkowizna',
		city15: 'Jaworznik i okolice',
		city16: 'Zakopane',
		city17: 'Ustroń',
		city18: 'Szklarska Poręba',
		city19: 'Dżerba',
		city20: 'Costa Brava i Pravancja',
		city21: 'Włochy/Sycylia',
	}

	const personsMap = {
		persons: 'z kim byłeś',
		person01: 'sam',
		person02: 'z Beatą',
		person03: 'z Dorotą',
		person04: 'z Aśką',
		person05: 'z Rodzicami',
		person06: 'z Beatą i z Dorotą',
		person07: 'z Dorotą i z Aśką',
		person08: 'z Dorotą i z Rodzicami',
		person09: 'z Dorotą i z Aśką i z Rodzicami',
		person10: 'z Beatą i z Dorotą i z Aśką',
	}

	const amoundMap = {
		amound: 'byłem razy',
		amound01: '1 raz',
		amound02: '2 razy',
		amound03: '3 razy',
		amound04: '4 razy',
		amound05: '5 razy',
		amound06: 'więcej niż 5 razy',
	}

	const ratingMap = {
		ratings: 'Oceń pobyt',
		rating01: 1,
		rating02: 2,
		rating03: 3,
		rating04: 4,
		rating05: 5,
	}

	// let minDate = new Date().toISOString().slice(0, 10)

	// const test1 = Object.values(cityValueMap)
	// console.log(test1)

	// const test2 = Object.entries(cityValueMap)
	// console.log(test2)

	console.log(describe)

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
							<option value={cityValueMap.cities}>Wybierz miasto</option>
							<option value={cityValueMap.city01}>Dźwirzyno</option>
							<option value={cityValueMap.city02}>Ustroie Morskie</option>
							<option value={cityValueMap.city03}>Darłówek</option>
							<option value={cityValueMap.city04}>Dąbki</option>
							<option value={cityValueMap.city05}>Łeba</option>
							<option value={cityValueMap.city06}>Władysławowo</option>
							<option value={cityValueMap.city07}>Trójmiasto</option>
							<option value={cityValueMap.city08}>Przechlewo</option>
							<option value={cityValueMap.city09}>Człuchów</option>
							<option value={cityValueMap.city10}>Parchowo</option>
							<option value={cityValueMap.city11}>Piławki</option>
							<option value={cityValueMap.city12}>Wola</option>
							<option value={cityValueMap.city13}>Borki</option>
							<option value={cityValueMap.city14}>Wawrzkowizna</option>
							<option value={cityValueMap.city15}>Jaworznik i okolice</option>
							<option value={cityValueMap.city16}>Zakopane</option>
							<option value={cityValueMap.city17}>Ustroń</option>
							<option value={cityValueMap.city18}>Szklarska Poręba</option>
							<option value={cityValueMap.city19}>Dżerba</option>
							<option value={cityValueMap.city20}>Costa Brava i Pravancja</option>
							<option value={cityValueMap.city21}>Włochy/Sycylia</option>
						</select>
						{/* <select className={styles.select} value={yourCity} onChange={handleChangeCity} name='City'>
							{Object.entries(cityValueMap).map(([value, cityName]) => (
								<option key={value} value={value}>
									{cityName}
								</option>
							))}
						</select> */}
					</div>
					<div className={styles.selects}>
						<label className={styles.label}>Wybierz osoby:</label>
						<select className={styles.select} value={person} onChange={handleChangePerson} name='person'>
							<option value={personsMap.persons}>Z kim byłeś</option>
							<option value={personsMap.person01}>sam</option>
							<option value={personsMap.person02}>z Beatą</option>
							<option value={personsMap.person03}>z Dorotą</option>
							<option value={personsMap.person04}>z Aśką</option>
							<option value={personsMap.person05}>z Rodzicami</option>
							<option value={personsMap.person06}>z Beatą i z Dorotą</option>
							<option value={personsMap.person07}>z Dorotą i z Aśką</option>
							<option value={personsMap.person08}>z Dorotą i z Rodzicami</option>
							<option value={personsMap.person09}>z Dorotą i z Aśką i z Rodzicami</option>
							<option value={personsMap.person10}>z Beatą i z Dorotą i z Aśką</option>
						</select>
					</div>
				</div>
				<div className={styles.ratings_and_date_and_amound}>
					<div className={styles.box_date}>
						<label className={styles.label}>Data ostatniego pobytu:</label>
						<input className={styles.date_input} value={date} type='date' max={date} onChange={handleChangeDate} />
					</div>
					<div className={styles.box_amound}>
						<label className={styles.label}>Ilość wizyt:</label>
						<select className={styles.select} value={visits} onChange={handleChangeVisits} name='amound'>
							<option value={amoundMap.amound}>byłem razy</option>
							<option value={amoundMap.amound01}>1 raz</option>
							<option value={amoundMap.amound02}>2 razy</option>
							<option value={amoundMap.amound03}>3 razy</option>
							<option value={amoundMap.amound04}>4 razy</option>
							<option value={amoundMap.amound05}>5 razy</option>
							<option value={amoundMap.amound06}>wiele razy</option>
						</select>
					</div>
					<div className={styles.box_rating}>
						<label className={styles.label}>Poziom zadowolenia:</label>
						<select className={styles.select} value={rating} onChange={handleChangeRating} name='rating'>
							<option value={ratingMap.ratings}>Oceń pobyt</option>
							<option value={ratingMap.rating01}>1</option>
							<option value={ratingMap.rating02}>2</option>
							<option value={ratingMap.rating03}>3</option>
							<option value={ratingMap.rating04}>4</option>
							<option value={ratingMap.rating05}>5</option>
						</select>
					</div>
				</div>
				<div className={styles.box_text}>
					<label className={styles.label}>Twój krótki opis:</label>
					<textarea className={styles.textarea} value={describe} onChange={handleChangeDescribe} name='text'></textarea>
				</div>
				<div className={styles.box_error}>
					<p className={styles.error}>{error}</p>
				</div>
				<div className={styles.box_btns}>
					<button
						className={styles.btn}
						onClick={() => handleClickInfoVacation(yourCity, person, date, visits, rating)}
					>
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
					{resultsInfo.date} <span className={styles.info_span}>{infoDate}</span>
				</h3>
				<h3 className={styles.info_result}>
					{resultsInfo.visits} <span className={styles.info_span}>{infoVisits}</span>
				</h3>

				<h3 className={styles.info_result}>
					{resultsInfo.rating} <span className={styles.info_span}>{infoRating}</span>
				</h3>
				<p className={styles.info_result_text}>{resultsInfo.text}</p>
			</div>
		</div>
	)
}

export default Task05task3
