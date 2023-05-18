import React from 'react'
import {BsLinkedin, BsGithub } from "react-icons/bs"
import {SiHashnode } from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/maryann-alonge-0946ba1a3/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/MaryannAlonge" target='_blank'> <BsGithub /></a>
      <a href="https://hashnode.com/@jumokealonge" target='_blank'> <SiHashnode /></a>
      
    </div>
  )
}

export default HeaderSocials