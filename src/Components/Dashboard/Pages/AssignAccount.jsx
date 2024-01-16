import React from 'react'
import './AssignAccount.css';

const AssignAccount = () => {
  return (
    <div className='assignaccountdiv'>
    <div class="assigncontainer">
      <div class="text">
         Assign Account
      </div>
      <form>
         <div class="form-row">
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Name</label>
            </div>
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Aadhar Number</label>
            </div>
         </div>
         <div class="form-row">
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Account Name</label>
            </div>
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Account Number</label>
            </div>
         </div>
         <div class="form-row">
         <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Status</label>
            </div>
        </div>
       
          <center><button className='btn btn-danger'>Submit</button></center>
      </form>
      </div>
      </div>
  )
}

export default AssignAccount