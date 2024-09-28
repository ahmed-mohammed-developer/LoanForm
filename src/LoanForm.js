import './LoanForm.css'
import Modal from './Modal';
import { useState } from 'react';
import MyComp from './MyComp';
import {LoanInputContets} from './contexts/LornFormInputContext'






export default function LoanForm() {
    const [errorMessage, setErrorMessage] = useState(null)
    const [showModale, setshowModale] = useState(false);
    const [loanInputs, setLoanInputs] = useState({
        name: '',
        phoneNumber: '',
        age: '',
        isEmplye: false,
        salery: "",
    })


    function handleFormSubmit (event){
        event.preventDefault()
        setErrorMessage(null)
        const {age, phoneNumber} = loanInputs
        if(age < 18 || age > 70){
            setErrorMessage("The age ids not allowed")
        } else if (phoneNumber.length < 10 || phoneNumber.length > 12){
            setErrorMessage("Phone Number Is Coorect")
        }
        setshowModale(true)
    }

    const btnIsDisabled = 
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

    function handleDivClick (){
        if (showModale)
        {
            setshowModale(false)
        }
    }

    function handlePhoneNumberInputChange(value ){
        setLoanInputs({...loanInputs, phoneNumber: value})
    }

    return(
        <div
        onClick={handleDivClick}
         className='LoanForm'>
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



                {/*<MyComp handleChange={handlePhoneNumberInputChange} value={loanInputs.phoneNumber} inputName="Phone Number"/>*/}
               <LoanInputContets.Provider>
               <MyComp />
               </LoanInputContets.Provider>


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
                className={btnIsDisabled ? "disabled" : ""}
                onClick={handleFormSubmit}
                disabled={btnIsDisabled}
                >Submit</button>

            </form>
            <Modal errorMessage={errorMessage} isVisible={showModale}/>
        </div>
    )
}