import React from 'react'
import './MainLeft.css'
import eduVide from '../../icons/eduction video.svg'
import clock from '../../icons/clock.svg'
import Online from '../../icons/Vector.svg'
import edu from '../../icons/eduction.svg'
import ads from '../../icons/ads block.svg'

function Main() {
  return (
    <div className='main__components'>
        <div className='main__topic'>
        <h1 className='text__main'>Access Curated Courses Worth<br/> ₹<s style={{textDecorationColor:'red',fontFamily:'sans-serif'}}>18,500</s> at just<span style={{color:'#0096FF',fontFamily:'sans-serif'}}> ₹99 </span>per year</h1>
        <div className='all_listitems'>
        <div className='main__listitems'>
            <img  className='icons__main' src={eduVide} alt='' />
           <h6><span className='main__thing'>100+</span> Job relevant Courses</h6>
        </div>
        <div className='main__listitems'>
            <img  className='icons__main' src={clock} alt='' />
           <h6><span className='main__thing'>20,000+</span> Hours of Content</h6>
        </div>
        <div className='main__listitems'>
            <img  className='icons__main' src={Online} alt='' />
           <h6><span className='main__thing'>Exclusive</span> Webinar access</h6>
        </div>
        <div className='main__listitems'>
            <img  className='icons__main' src={edu} alt='' />
           <h6>Scholarship Worth<span className='main__thing'> ₹94,500</span></h6>
        </div>
        <div className='main__listitems'>
            <img className='icons__main'  src={ads} alt='' />
           <h6><span className='main__thing'>Ad Free</span> Learning Experience</h6>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Main