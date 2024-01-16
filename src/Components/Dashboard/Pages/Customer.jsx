import React from 'react'
import './Customer.css';
import { useRef, useState } from 'react'


const Customer = () => {
    const [image, setImage] = useState("");
    const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setImage(event.target.files[0]);
  }
  return (
    <div class="bg-image1">
    <div class="form-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
            <div class="form-container">
              <h3 class="title">Customer Register</h3>
              <form class="form-horizontal">
                <div class="form-group">
                  <label>Upload Profile*</label>
                  <div onClick={handleImageClick}>

                    {image ? (<img src={URL.createObjectURL(image)} alt="ddsd" height={100} width={100} className='img-display-before' />)
                      : <img src={require('../../../assets/upload.png')} alt="ddsd" height={100} width={100} className='img-display-after' />}
                    <input class="form-control" type="file" onChange={handleImageChange} ref={inputRef} style={{ display: "none" }} />
                  </div>
                </div>
                <div>

                </div>
                <div class="form-group">
                  <label >Aadhar Number*</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>Area Name*</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>Customer Name*</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>Smart Card Number*</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>Contact Number*</label>
                  <input class="form-control" type="text" />
                </div>
                 <div class="form-group">
                  <label>Alternative Contact No*</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>Tamil Name</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>Address</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>Status</label>
                  <input class="form-control" type="text" />
                </div>

                <center><button className="shadow__btn">Create Account</button></center>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Customer