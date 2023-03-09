import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/Styles.css'

const Main = () => {
  window.onload = function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }
  
  
  return (
    <div className='main_wrapper_component'>
        <Navbar/>
          <div className='Main_wrapper'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Main