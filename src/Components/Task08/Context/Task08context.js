import { createContext, useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

const Task08context = createContext()

export const ToDoListCotext = ({ children }) => {
	let currentDate = new Date().toISOString().slice(0, 10)

	const [inputTask, setInputTask] = useState('')

	const [priority, setPriority] = useState(false)

	const [date, setDate] = useState(currentDate)

	const [taskDoLength, setTaskDoLenght] = useState(0)

	const [error, setError] = useState('')
	const [textLength, setTextLength] = useState('')
	const [infoTaskDoLength, setInfoTasdDoLength] = useState('')

	const [taskDoList, setTaskDoList] = useState([])
	const [taskDoneList, setTaskDoneList] = useState([])

	const [taskDo, setTaskDo] = useState([
		{
			id: uuidv4(),
			task: '',
			important: false,
			taskDate: '',
		},
	])

	const handleChangeInputTask = e => {
		if (inputTask.length < 30) {
			setInputTask(e.target.value)
		} else {
			setTextLength('osiągnąłeś maksymalną ilość znaków')
		}
	}

	const handleChangePriority = () => {
		setPriority(!priority)
	}

	const handleChangeDate = e => {
		setDate(e.target.value)
	}

	useEffect(() => {
		setTaskDoLenght(taskDoList.length)
		if (taskDoList.length <= 6) {
			setInfoTasdDoLength('')
		}
	}, [taskDoList.length])

	const handleAddTaskDo = () => {
		setTaskDo({
			id: uuidv4(),
			task: inputTask,
			important: true,
			taskDate: date,
		})
		if (inputTask !== '' && priority && taskDo.length <= 6) {
			setTaskDoList(prevTaskDo => [...prevTaskDo, taskDo])
		} else if (inputTask !== '' && !priority && taskDo.length <= 6) {
			setTaskDoList(prevTaskDo => [...prevTaskDo, taskDo])
		} else if (taskDoList.length > 6) {
			setInfoTasdDoLength('masz za dużo zadań. Musisz je zrealizować bo możesz nie podołać')
			setError('')
		}

		if (inputTask === '') {
			setError('nie wypełniłeś poprawnie formularza')
		} else {
			setError('')
		}

		if (taskDoList.length !== 7) {
			setDate(currentDate)
			setInputTask('')
			setPriority(false)
			setTextLength('')
		}
	}

	setTimeout(() => {
		if (error !== '') {
			setError('')
		}
	}, 3000)

	const handleDeleteTask = id => {
		const deleteTask = taskDoList.filter(item => item.id !== id)
		setTaskDoList(deleteTask)
	}

	const handleTaskDone = id => {
		const addToDone = taskDoList.filter(item => item.id === id)
		setTaskDoneList([...taskDoneList, ...addToDone])
		const deleteTask = taskDoList.filter(item => item.id !== id)
		setTaskDoList(deleteTask)
		// console.log(taskDoneList)
	}

	return (
		<Task08context.Provider
			value={{
				inputTask,
				priority,
				date,
				taskDoLength,
				taskDoList,
				error,
				textLength,
				infoTaskDoLength,
				taskDoneList,
				handleChangeInputTask,
				handleChangePriority,
				handleChangeDate,
				handleAddTaskDo,
				handleDeleteTask,
				handleTaskDone,
			}}
		>
			{children}
		</Task08context.Provider>
	)
}

export default Task08context
