import React from 'react'
import Header from "../../components/header/Header"
import Aside from '../../components/aside/Aside'
import Main from "../../components/main/Main"
import Footer from "../../components/footer/Footer"

function Admin() {
  return (
    <div>
      <Aside/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Admin