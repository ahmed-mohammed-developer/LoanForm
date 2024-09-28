import { useContext } from "react"
import { LoanInputContets } from "./contexts/LornFormInputContext"
import { UserContext } from "./contexts/UserContext"
export default function MyComp(){

    const inputCon = useContext(LoanInputContets)
    const userData = useContext(UserContext)

    return(
        <>
        
        <label>{userData.name} {inputCon.labeTitle}</label>
                <input
                  value={inputCon.value}
                  onChange={(event) => {
                    inputCon.handeleChange(event.target.value)
                  }}
                />
        </>
    )
}