import { useContext } from 'react'
import styles from './Task01.module.css'
import Task01Context from './Context/Task01Context'

const Task01bin = () => {
	const { productShop, handleChangeProduct, isInShop, handleBuy, magazinState } = useContext(Task01Context)

	console.log(productShop.available)

	return (
		<div className={styles.wrapper_bin}>
			<h1 className={styles.heading_bin}>Koszyk</h1>
			<h4 className={styles.bin_available}>Dostępnych produktów w magazynie {isInShop}</h4>
			<div className={styles.btns_bin}>
				<button
					onClick={() => handleChangeProduct('sub')}
					disabled={productShop.shoppingCart ? false : true}
					className={styles.btn_bin_subtraction}
				>
					-
				</button>
				<span className={styles.btn_state}>{productShop.shoppingCart}</span>
				<button
					disabled={productShop.shoppingCart === productShop.available ? true : false}
					onClick={() => handleChangeProduct('add')}
					className={styles.btn_bin_add}
				>
					+
				</button>
				<button
					onClick={handleBuy}
					className={productShop.shoppingCart !== 0 ? styles.btn_bin_buy : styles.btn_no_bin_buy}
				>
					kup
				</button>
			</div>
			<div className={styles.box_info_state_magazin}>
				<h2 className={styles.bin_state_magazin}>{magazinState}</h2>
			</div>
			<div className={styles.box_add_magazin}>
				<div className={styles.box_add_input}>
					<label className={styles.label_add_magazin}>Dodaj produkty do magazynu</label>
					<input className={styles.input_add_magazin} type='number' min='0' />
				</div>
				<div className={styles.btn_box_add_magazin}>
					<button className={styles.btn_add_magazin}>Dodaj</button>
				</div>
			</div>
		</div>
	)
}

export default Task01bin
