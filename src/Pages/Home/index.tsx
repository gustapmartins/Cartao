import Form from '../../Components/Form'
import styles from './Home.module.scss'
import video from '../../assets/visa-flores-ssyoutube.online.mp4'

function App() {

  return (
    <div className={styles.Home}>
        <video src="/Assets/visa-flores-ssyoutube.online.mp4" autoPlay loop muted ></video>
        <Form/> 
    </div>
  )
}

export default App
