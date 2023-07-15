import React, {  useRef } from "react";
import "./MainRight.css";
import clock from '../../icons/icon clock.svg'
import rozopay from '../../icons/Rozorpay.png'

function MainRight() {

  const val=useRef()

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
        <input type='radio' id='plan1' name='radio__btns'  className='all__checkbox' />
          <div className="duration__path" >
            <span style={{backgroundColor:'green'}}>Recommended</span>
           <p>12 Months Subscription</p>
          </div>
        </div>
        <p>
          Total<span ref={val}> ₹179 </span>
          <br />
          ₹15 /mo
        </p>
      </div>
      <div className="all__activeplans">
        <div className="first__part">
        <input type='radio' id='plan2' name='radio__btns'  className='all__checkbox' />
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
            <input type='radio' id='plan3' name='radio__btns'  className='all__checkbox' />
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
            <p className="price--discount">{}</p>
        </div>
      </div>
      <div className="total__price">
        <p>Total (Incl. of 18% GST)</p>
        <p>{}</p>
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
