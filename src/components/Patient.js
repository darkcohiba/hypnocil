import React from 'react'

export default function Patient({patient}) {
    const status = patient.deceased ? 'Deceased: ' : null;
    console.log(patient.side_effects.length)
    return (
        <tr>
            <td></td>
            <td>{patient.id}</td>
            <td>{status}{patient.name}</td>
            <td>{patient.side_effects.length > 1 ? patient.side_effects.join(", ") : patient.side_effects}</td>
        </tr>
    )
}
