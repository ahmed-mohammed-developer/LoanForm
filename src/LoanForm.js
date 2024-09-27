import './LoanForm.css'
import Modal from './Modal';

export default function LoanForm() {
    return(
        <div className='LoanForm'>
            <form className='forms'>
                <h1>Requesting a LoanForm</h1>
                <hr></hr>

                <label>Name</label>
                <input />


                <label>Phone Number</label>
                <input />


                <label>Age</label>
                <input />


                <label>Are you an employee</label>
                <input type='checkbox' />

                <label>Salery</label>
                <select>
                    <option>less then 500$</option>
                    <option>between 500$ and 2000$ </option>
                    <option>above 2000$</option>
                </select>

                <button>Submit</button>

            </form>
            <Modal />
        </div>
    )
}