import React from 'react'
import { NavLink } from 'react-router-dom'

function Common(props) {
  return (
    <div>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 my-auto order-2 order-lg-1 d-flex justify-center-content flex-column">
                  <h1>{props.title} <span className="brand-name">UITech</span></h1>
                  <h2 className="my-3">We are the team of experts!</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary btn-get-started">{props.button}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgSrc} className="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Common
