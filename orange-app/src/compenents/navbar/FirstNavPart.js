import styles from './FirstNavBar.module.sass'

let FirstNavPart = (props) => {
	return (
		<div className={`${styles.firstnavbar}`}>
			<div className={`${styles['icon-container']}`}>
				<i class={`fa-solid fa-magnifying-glass ${styles.i}`}></i>
				<span>Rechercher</span>
			</div>
			<div className={`${styles['icon-container']}`}>
				<i class={`fa-solid fa-shop ${styles.i}`}></i>
				<span>nos boutiques</span>
			</div>
			<div className={`${styles['icon-container']}`}>
				<i class={`fa-solid fa-comment-question ${styles.i}`}></i>
				<span>aide et contact</span>
			</div>
		</div>
	);
};

export default FirstNavPart;
