import React from 'react'

import './App.css'

import Title from './Title'
import UserCard from './User-card'
import UserCardClass from './User-card-class'

import ReactPlayer from 'react-player'

const App = () => {

  return (
    <>

      <section className="user-cards">

        <Title text="Lista de usuarios" />

        <UserCard name="Germán" lastname="Álvarez" image="https://germanalvarez.net/img/german-alvarez-sc.jpg" />
        <UserCard name="Cindy" lastname="Lauper" image="https://i.pinimg.com/originals/fb/d3/16/fbd3163c3bbc673ccfde1629897104f1.jpg" />
        <UserCardClass name="Pablo" lastname="Casado" image="https://www.publico.es/files/module_big_mobile//files/crop//uploads/2020/09/26/5f6f2e4e88520.r_1601126705706.0-34-746-454.jpeg" />
        <UserCard name="Damian" lastname="Lago" />

      </section>

      <section>

        <Title text="Vídeo de react-player!" />
        <ReactPlayer url="https://www.youtube.com/watch?v=TQhQX3G6HCQ&ab_channel=RTVE" playing="false"></ReactPlayer>

      </section>


    </>
  )
}

export default App