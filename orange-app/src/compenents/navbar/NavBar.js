import Container from '../Container'
import styles from './navbar.module.sass'
import FirstNavPart from './FirstNavPart'
import SecondNavPart from './SecondNavPart'

let NavBar = props => {
  let classes = `${props.className} ${styles.navbar}`
  return (
    <nav className={classes}>
      <Container className={``}>
        <FirstNavPart />
        <SecondNavPart />
      </Container>
    </nav>
  )
}

export default NavBar