import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

function App() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/patients')
    .then(response => response.json())
    .then(data => setPatients(data))
  },[])

  const filterPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    // || patient.side_effects.toLowerCase().includes(searchTerm.toLowerCase()
    )

  console.log(filterPatients)
  return (
    <div className="root">
      <Header setSearchTerm={setSearchTerm}/>
      <div className="content">
        <NewPatientForm setPatients={setPatients}/>
        <PatientList patients={filterPatients} setPatients={setPatients} />
      </div>
    </div>
  );
}

export default App;
