import styles from './Container.module.sass'

let Container = (props) => {
	let classes = `${props.className} ${styles.container}`;
	return <div className={classes}>{props.children}</div>;
};

export default Container