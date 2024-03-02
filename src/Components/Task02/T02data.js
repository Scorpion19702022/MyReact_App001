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
// import man02 from './assets/man02.jpg'
// import man03 from './assets/man03.jpg'
// import man04 from './assets/man04.jpg'
// import man05 from './assets/man05.jpg'
// import man06 from './assets/man06.jpg'
// import man07 from './assets/man07.jpg'
// import man08 from './assets/man08.jpg'

const T02data = () => {
	const people = [
		{
			name: 'Beata',
			age: 52,
			nation: 'Polska',
			city: 'Łódź',
			job: 'nauczycielka',
			img: woman01,
			sex: 'kobieta',
		},
		{
			name: 'Jacek',
			age: 53,
			nation: 'Polska',
			city: 'Łódź',
			job: 'grafik/programista',
			img: man01,
			sex: 'mężczyzna',
		},
	]

	const [like, setLike] = useState(false)
	const [dislike, setDislike] = useState(false)

	const handleViewLike = index => {
		if (index) {
			setLike(!like)
		}
	}

	const handleViewDislike = () => {
		setDislike(!dislike)
	}

	const peopleList = people.map((item, index) => (
		<div key={index} className={!like ? styles.people_box_list : styles.people_box_list_like}>
			<h2 className={styles.people_name}>{item.name}</h2>
			<div className={styles.age_people}>
				<em className={styles.age_people_em}>wiek: {item.age}</em>
			</div>
			<div className={styles.box_imgs_people}>
				<img className={styles.task01_img_people} src={item.img} alt='postać' />
			</div>
			<p className={styles.people_info}>{item.city}</p>
			<p className={styles.people_info}>{item.nation}</p>
			<p className={styles.people_info}>{item.sex}</p>
			<p className={styles.people_info}>{item.job}</p>
			<div className={styles.btns_people}>
				<button className={styles.btn_people} onClick={() => handleViewLike(index)}>
					llike
				</button>
				<button className={styles.btn_people} onClick={handleViewDislike}>
					dislike
				</button>
			</div>
		</div>
	))

	return <div className={styles.people_box}>{peopleList}</div>
}

export default T02data
