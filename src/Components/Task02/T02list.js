import Buttons from './Buttons'
import T02data from './T02data'
import styles from './T02list.module.css'

const T02list = () => {
	return (
		<div className={styles.wrapper_list}>
			<div>
				<Buttons />
				<T02data />
			</div>
		</div>
	)
}

export default T02list
