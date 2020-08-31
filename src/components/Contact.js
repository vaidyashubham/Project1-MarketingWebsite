import React from 'react'
import ContactImg from '../images/undraw_contact_us_15o2.svg'
import Common from './Common'

function Contact() {
  return (
    <div>
      <Common title="Welcome to Contact Page" imgSrc={ContactImg} visit="/contact" button="Contact Now" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Mobile number</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter your mobile number" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Your commemt</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <a href="#" class="btn btn-primary btn-block">Submit</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
