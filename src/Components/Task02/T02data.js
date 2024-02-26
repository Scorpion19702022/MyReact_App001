import React from 'react'

const T02data = () => {
	const people = [
		{
			name: 'Beata',
			age: 52,
			nation: 'Polska',
			city: 'Łódź',
			job: 'nauczycielka',
			img: '',
			sex: 'kobieta',
		},
		{
			name: 'Jacek',
			age: 53,
			nation: 'Polska',
			city: 'Łódź',
			job: 'grafik/programista',
			img: '',
			sex: 'mężczyzna',
		},
	]

	const peopleList = people.map((item, index) => (
		<div key={index}>
			<h2>{item.name}</h2>
		</div>
	))

	return <div>{peopleList}</div>
}

export default T02data
