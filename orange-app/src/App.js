import styles from './App.module.sass';
import NavBar from './compenents/navbar/NavBar'

function App() {
  return (
    <div className={`${styles.App}`}>
    <NavBar />
    </div>
  );
}

export default App;
