import React from "react"
import Patient from "./Patient";

function PatientList({patients}) {
  const patientRows = patients.map(patient =>
    <Patient 
      key={patient.id}
      patient={patient}
    />
    )
  

    return(
      <table>
          <tbody>
            <tr>
                <th></th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Noted Side Effects</th>
            </tr>
            {patientRows}
          </tbody>
      </table>  
    );
}

export default PatientList;