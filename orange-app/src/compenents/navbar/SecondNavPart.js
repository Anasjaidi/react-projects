import styles from "./SecondNavPart.module.sass";

let SecondNavPart = (props) => {
	return (
		<div className={`${styles['sec-container']}`}>
			<div className={`${styles.img}`}>
				<img src={require("./../../img/logo-orange.png")} alt="logo"/>
			</div>
			<ul className={`${styles.ul}`}>
				<li>Mobiles et forfaits</li>
				<li>Internet</li>
				<li>Packs Internet + Mobile</li>
				<li>Maison</li>
				<li>Maison</li>
				<li>Banque</li>
				<li>News</li>
			</ul>
		</div>
	);
};

export default SecondNavPart;
