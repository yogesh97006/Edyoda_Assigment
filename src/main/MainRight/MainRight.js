import React, { useState } from "react";
import "./MainRight.css";
import clock from '../../icons/icon clock.svg'
import rozopay from '../../icons/Rozorpay.png'

function MainRight() {

  const [price,setPrice]=useState()
  const [val,setValue]=useState("- ₹ 0")
  const [curVal,setCurVal]=useState(0)

 const onChangePlans=(e)=>{
  const checked=e.target.value
console.log(checked)
  setPrice(checked)
  
  if(checked==="149"){
    setValue("- ₹ 18,151")
    setCurVal(149)
   }
   else if(checked==="99"){
  setValue("- ₹ 18,101")
  setCurVal(99)
   }else{
  setValue("- ₹ 18,121")
  setCurVal(179)
   }
  //  console.log(price)
 }



  return (
    <div className="main__plan">
      <div className="plan__top">
        <div>
          <span className="option">1</span>
          <p>Sign Up</p>
        </div>
        <div>
          <span className="option">2</span>
          <p>Subscribe</p>
        </div>
      </div>
      <h3>Select Your Subscription Plan</h3>
      <div className="all__plans">
        <div className="first__part">
          <input type="radio" checked disabled />
          <div className="duration__path">
            <span>Offer Expired</span>
            <p>12 Months Subscription</p>
          </div>
        </div>
        <p>
          Total<span> ₹99 </span>
          <br />
          ₹8 /mo
        </p>
      </div>
      <div className="all__activeplans"  >
        <div className="first__part">
        <input type='radio' id='plan1' onChange={onChangePlans} name='radio__btns'  value='179' className='all__checkbox' checked={price==='179'}/>
          <div className="duration__path" >
            <span style={{backgroundColor:'green'}}>Recommended</span>
           <p>12 Months Subscription</p>
          </div>
        </div>
        <p>
          Total<span> ₹179 </span>
          <br />
          ₹15 /mo
        </p>
      </div>
      <div className="all__activeplans">
        <div className="first__part">
        <input type='radio' id='plan2' onChange={onChangePlans} name='radio__btns' value='149' className='all__checkbox' checked={price==='149'} />
          <div style={{marginTop:'20px'}} className="duration__path">
            <p >6 Months Subscription</p>
          </div>
        </div>
        <p>
          Total<span > ₹149 </span>
          <br />
          ₹25 /mo
        </p>
      </div>
      <div className="all__activeplans" type='radio'  >
        <div className="first__part">
            <input type='radio' id='plan3' onChange={onChangePlans} name='radio__btns' value='99'  className='all__checkbox' checked={price==='99'} />
          <div style={{marginTop:'20px'}} className="duration__path">
            <p >3 Months Subscription</p>
          </div>
        </div>
        <p>
          Total<span> ₹99 </span>
          <br />
          ₹33 /mo
        </p>
      </div>
      <hr />
      <div className="info__plan">
        <p>Subscription Fee</p>
        <p>₹ 18,500</p>
      </div>
      <div>
        <div className="offer__time">
            <div>
            <p>Limited time offer</p>
            <div className="offer">
                <img className="icon__clock" src={clock} alt='img' />
                <p>Offer Valid till 25th March 2023</p>
            </div>
            </div>
            <p className="price--discount">{val}</p>
        </div>
      </div>
      <div className="total__price">
        <p>Total (Incl. of 18% GST)</p>
        <h2>₹ {curVal}</h2>
      </div>
      <div className="plans__btns">
        <button style={{color:'red',border:'1px solid red'}} className="btn__prop">
         CANCEL
        </button>
        <button style={{color:'white',backgroundColor:'green',border:'none'}} className="btn__prop">
            PROCEED TO PAY
        </button>
      </div>
      <img style={{margin:'5px'}} src={rozopay} alt=''/>
    </div>
  );
}

export default MainRight;
