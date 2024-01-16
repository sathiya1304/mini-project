import React from 'react'

const Scheme = () => {
  return (
    <div className='assignaccountdiv'>
    <div class="assigncontainer">
      <div class="text">
        Scheme
      </div>
      <form>
         <div class="form-row">
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Scheme Id</label>
            </div>
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Scheme Name</label>
            </div>
         </div>
         <div class="form-row">
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Description</label>
            </div>
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Interval</label>
            </div>
         </div>
         <div class="form-row">
         <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Duration</label>
            </div>
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Value</label>
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

export default Scheme