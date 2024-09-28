import "./Modal.css"
export default function Modal({isVisible, errorMessage=null}){

    if (isVisible)
    {

    return(
        <div className="modal">
            <div className="modal-contenet">
                <h1 style={{color: errorMessage ? "red" : "green"}}>{
                    errorMessage != null
                    ? errorMessage 
                    : "The Form Has Been Submitted Successfully"
                    }</h1>
            </div>
            </div>
    )
} else {
    return (<></>) 
}
}