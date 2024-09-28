import {use}
export default function MyComp({value, handleChange, inputName}){
    return(
        <>
        
        <label>{inputName}</label>
                <input
                  value={value}
                  onChange={(event) => {
                    handleChange(event.target.value)
                  }}
                />
        </>
    )
}