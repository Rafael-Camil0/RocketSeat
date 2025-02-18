import styles from './Sidebar.module.css'

import { PencilLine } from "@phosphor-icons/react";


export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1716881139357-ddcb2f52940c?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className={styles.profile}>

      <img className = {styles.avatar}src="https://github.com/Rafael-Camil0.png"  />

      <strong>Rafael Camilo</strong>
      <span>Web Developer</span>

    </div>

    <footer>
      
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}