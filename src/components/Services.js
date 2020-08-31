import React from 'react'
import Common from './Common'
import ServiceImg from '../images/undraw_Operating_system_re_iqsc (1).svg'

function Services() {
  return (
    <div>
      <div className="my-5">
        <Common title="Welcome to Our Services" imgSrc={ServiceImg} visit="/service" button="Contact Now" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <div className="row ">
              <div className="col-md-4">
                <div class="card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9-DIYi0shMxleQNINUHsZhSkOiGB05E0cgA&usqp=CAU" class="card-img-top img-fluid" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9-DIYi0shMxleQNINUHsZhSkOiGB05E0cgA&usqp=CAU" class="card-img-top img-fluid" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9-DIYi0shMxleQNINUHsZhSkOiGB05E0cgA&usqp=CAU" class="card-img-top img-fluid" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
