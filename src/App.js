import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

function App() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/patients')
    .then(response => response.json())
    .then(data => setPatients(data))
  },[])
  console.log(patients)
  return (
    <div className="root">
      <Header/>
      <div className="content">
        <NewPatientForm />
        <PatientList patients={patients} setPatients={setPatients} />
      </div>
    </div>
  );
}

export default App;
