import React from 'react'

export default function Patient({patient}) {
    const status = patient.deceased ? null : 'Deceased: ';
    return (
        <tr>
            <td></td>
            <td>{patient.id}</td>
            <td>{status}{patient.name}</td>
            <td>{patient.side_effects.join(", ")}</td>
        </tr>
    )
}
