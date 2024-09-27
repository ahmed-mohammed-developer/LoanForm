import './LoanForm.css'
import Modal from './Modal';
import { useState } from 'react';






export default function LoanForm() {
    const [loanInputs, setLoanInputs] = useState({
        name: '',
        phoneNumber: '',
        age: '',
        isEmplye: false,
        salery: "",
    })



    return(
        <div className='LoanForm'>
            <form className='forms'>
                <h1>Requesting a LoanForm</h1>
                <hr></hr>

                <label>Name</label>
                <input 
                value={loanInputs.name}
                onChange={(event) => {
                    setLoanInputs({...loanInputs, name: event.target.value})
                }}
                />


                <label>Phone Number</label>
                <input
                  value={loanInputs.phoneNumber}
                  onChange={(event) => {
                      setLoanInputs({...loanInputs, phoneNumber: event.target.value})
                  }}
                />


                <label>Age</label>
                <input
                  value={loanInputs.age}
                  onChange={(event) => {
                      setLoanInputs({...loanInputs, age: event.target.value})
                  }}
                />


                <label>Are you an employee</label>
                <input type='checkbox' checked={loanInputs.isEmplye}
                onChange={(event) => {
                    setLoanInputs({...loanInputs, isEmplye: event.target.checked})
                }}
                />

                <label>Salery</label>
                <select
                  value={loanInputs.salery}
                  onChange={(event) => {
                      setLoanInputs({...loanInputs, salery: event.target.value})
                  }}
                >
                    <option>less then 500$</option>
                    <option>between 500$ and 2000$ </option>
                    <option>above 2000$</option>
                </select>

                <button
                className=''
                onClick={handleFormSubmit}
                disabled={btnIsDisabled}
                >Submit</button>

            </form>
            {/*<Modal />*/}
        </div>
    )
}