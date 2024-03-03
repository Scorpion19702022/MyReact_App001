import React, { useState } from 'react'

import styles from './T02data.module.css'

import woman01 from './assets/woman01.jpg'
// import woman02 from './assets/woman02.jpg'
// import woman03 from './assets/woman03.jpg'
// import woman04 from './assets/woman04.jpg'
// import woman05 from './assets/woman05.jpg'
// import woman06 from './assets/woman06.jpg'
// import woman07 from './assets/woman07.jpg'
// import woman08 from './assets/woman08.jpg'

import man01 from './assets/man01.jpg'
import Buttons from './Buttons'
// import man02 from './assets/man02.jpg'
// import man03 from './assets/man03.jpg'
// import man04 from './assets/man04.jpg'
// import man05 from './assets/man05.jpg'
// import man06 from './assets/man06.jpg'
// import man07 from './assets/man07.jpg'
// import man08 from './assets/man08.jpg'

const oldYear = new Date()

console.log(oldYear.getFullYear())

const T02data = () => {
	const people = [
		{
			id: 0,
			name: 'Beata',
			age: oldYear.getFullYear() - 1971,
			nation: 'Polska',
			city: 'Łódź',
			job: 'nauczycielka',
			img: woman01,
			sex: 'kobieta',
		},
		{
			id: 1,
			name: 'Jacek',
			age: oldYear.getFullYear() - 1970,
			nation: 'Polska',
			city: 'Łódź',
			job: 'grafik/programista',
			img: man01,
			sex: 'mężczyzna',
		},
	]

	const [like, setLike] = useState([])
	const [dislike, setDislike] = useState([])

	const [selectWomen, setSelectWomen] = useState(false)
	const [selectMen, setSelectMen] = useState(false)
	const [selectAll, setSelectAll] = useState(true)

	const [newPeople, setNewPeople] = useState([...people])

	// const handleViewLike = id => {
	// 	setLike(prevState => {
	// 		if (prevState.includes(id)) {
	// 			return prevState.filter(likeId => likeId !== id)
	// 		} else {
	// 			return [...prevState, id]
	// 		}
	// 	})
	// }

	// const handleViewDislike = index => {
	// 	setDislike(prevState => {
	// 		if (prevState.includes(index)) {
	// 			return prevState.filter(disLikeId => disLikeId !== index)
	// 		} else {
	// 			return [...prevState, index]
	// 		}
	// 	})
	// }

	const handleViewLike = id => {
		setLike(prevState => {
			// Jeśli przycisk like jest już zaznaczony, usuń go
			if (prevState.includes(id)) {
				return prevState.filter(likeId => likeId !== id)
			} else {
				// Jeśli przycisk like nie jest jeszcze zaznaczony, dodaj go i usuń dislike
				setDislike(prevDislike => prevDislike.filter(dislikeId => dislikeId !== id))
				return [...prevState, id]
			}
		})
	}

	const handleViewDislike = id => {
		setDislike(prevState => {
			// Jeśli przycisk dislike jest już zaznaczony, usuń go
			if (prevState.includes(id)) {
				return prevState.filter(dislikeId => dislikeId !== id)
			} else {
				// Jeśli przycisk dislike nie jest jeszcze zaznaczony, dodaj go i usuń like
				setLike(prevLike => prevLike.filter(likeId => likeId !== id))
				return [...prevState, id]
			}
		})
	}

	const handleSelec = select => {
		if (select === 'kobieta') {
			const women = people.filter(womenItems => womenItems.sex === select)
			setNewPeople(women)
			setSelectWomen(!selectWomen)
			setSelectMen(false)
			setSelectAll(false)
		} else if (select === 'mężczyzna') {
			const men = people.filter(menItems => menItems.sex === 'mężczyzna')
			setNewPeople(men)
			setSelectWomen(false)
			setSelectMen(!selectMen)
			setSelectAll(false)
		} else if (select === 'all') {
			setNewPeople(people)
			setSelectWomen(false)
			setSelectMen(false)
			setSelectAll(!selectAll)
		}
	}

	const isLike = id => like.includes(id)

	const isDislike = index => dislike.includes(index)

	const peopleList = newPeople.map((item, id) => (
		<div
			key={id}
			className={
				!isLike(item.id) && !isDislike(item.id)
					? styles.people_box_list
					: isLike(item.id)
					? styles.people_box_list_like
					: isDislike(item.id)
					? styles.people_box_list_dislike
					: styles.people_box_list
			}
		>
			<h2 className={styles.people_name}>{item.name}</h2>
			<div className={styles.age_people}>
				<em className={styles.age_people_em}>wiek: {item.age} rok</em>
			</div>
			<div className={styles.box_imgs_people}>
				<img className={styles.task01_img_people} src={item.img} alt='postać' />
			</div>
			<p className={styles.people_info}>{item.city}</p>
			<p className={styles.people_info}>{item.nation}</p>
			<p className={styles.people_info}>{item.sex}</p>
			<p className={styles.people_info}>{item.job}</p>
			<div className={styles.btns_people}>
				<button className={styles.btn_people} onClick={() => handleViewLike(item.id)}>
					llike
				</button>
				<button className={styles.btn_people} onClick={() => handleViewDislike(item.id)}>
					dislike
				</button>
			</div>
		</div>
	))

	return (
		<div className={styles.people_box}>
			<Buttons selectPeople={handleSelec} selectWomen={selectWomen} selectMen={selectMen} selectAll={selectAll} />
			{peopleList}
		</div>
	)
}

export default T02data
