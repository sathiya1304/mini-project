import React from 'react'
import './Loan.css';
const Loan = () => {
  return (
    <div className='customercon'>
      <div class="container ">
        <form>
          <div class="row jumbotron box8">
            <div class="col-sm-12 mx-t3 mb-4">
              <h2 class="text-center text-dark fw-bold">LOAN REGISTER</h2>
            </div>
            <div class="form-group col-sm-6">
              <label>Customer Name</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Aadhar Number</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Area Name</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Scheme Name</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Duration</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Interval</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Amount</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Initial Profit</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>EMI Amount</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Start Date</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Loan ID</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Collection Member</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Investor</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Value</label>
              <input class="form-control" type="text" />
            </div>
            <div class="form-group col-sm-6">
              <label>Status</label>
              <input class="form-control" type="text" />
            </div>


            <div class="col-sm-12 form-group mt-3 text-center">
              <button class="loanregbtn">
                Apply Now
                <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                  <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                </svg>
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Loan