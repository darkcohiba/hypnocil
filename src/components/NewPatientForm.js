import React, { useState } from "react"

function NewPatientForm({setPatients}) {
    const [name, setName] = useState("")
    const [sideEffects, setSideEffects] = useState([])


    // const [formData, setFormData] = useState({
    //     "name": "",
    //     "deceased": false,
    //     "side-effects": []
    // })

    // function handleFormChange(event){
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     })
    // }

    function handleFormSubmit(event){
        // submit the form to the server
        event.preventDefault()
        fetch("http://localhost:3000/patients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "deceased": false,
                "side_effects": sideEffects
            })
        })
        .then(resp => resp.json())
        .then(patient => setPatients((prevPatients) => [...prevPatients, patient]))
        setName("")
        setSideEffects([])
        event.target.reset()
    }
    

    return(
        <>
            <form onSubmit={handleFormSubmit} id="new-patient-form">
                <input onChange={(e)=> setName(e.target.value)} id="patient-name" type="text" placeholder="Patient Name" name="name" />
                <select  onChange={(e)=> setSideEffects((prevSideEffects) => [...prevSideEffects, e.target.value])} name="side-effects" id="side-effects" form="new-patient-form">
                    <option value="no symptoms">No Symptoms</option>
                    <option value="dizziness">Dizziness</option>
                    <option value="nausea">Nausea</option>
                    <option value="somnambulism">Somnambulism</option>
                    <option value="memory">Memory</option>
                    <option value="allergy">Severe Allergic Reaction</option>
                    <option value="headache">Headache</option>
                </select>
                <input type="submit" value="Add Patient" />
            </form>
        </>
    )
}

export default NewPatientForm;