import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, {useState, useEffect} from 'react';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const coWorkersArr = [
    {name: 'jack', role: 'dev', email:'123@gmail.com'},
    {name: 'jill', role: 'boss', email:'1213@gmail.com'}
  ]
  const [coWorker, setCoWorker] = useState(coWorkersArr);
  const [error, setError] = useState('');

  const [formValues, setFormValues] = useState(initialFormValues);
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newCoWorker = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    if (!newCoWorker.name || !newCoWorker.email || !newCoWorker.role) {
      setError("You've gotta fill out all of the fields ya chump!");
      return;
    }

    setCoWorker([newCoWorker, ...coWorker])
    setFormValues(initialFormValues);
    setError('');
  }
  
  return (
    <div className="App">
      <h3 className='error'>{error}</h3>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {coWorker.map(worker => {
        return <div>{`${worker.name} is a ${worker.role} and you contact them at ${worker.email}`}</div>
      })}
    </div>
  );
}

export default App;
