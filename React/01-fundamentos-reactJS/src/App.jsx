import {Post} from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

function App() {
 

  return (
    <div>
      <Header/>
     <div className={styles.wrapper}>

      <Sidebar/>
      <main>
        <Post author = "Diego Fernandes " content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque recusandae commodi perferendis provident hic numquam ipsam tenetur laudantium, accusantium illum doloremque aspernatur sint quisquam doloribus ducimus veritatis minima alias"/>
        <Post author = "Rafael Camilo" content = "Outro post"/> 
      </main>

     </div>
    </div>
    
  )
}

export default App
