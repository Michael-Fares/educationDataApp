/**
 * shoselectd be first query
 * http://localhost:4000/educationapi?school.name=Boston%20College&fields=id,school.name
 */

import axios from 'axios';
import React, {useState} from 'react'
import './App.css';
import ScoreCard from "./components/ScoreCard";

const url = 'https://secret-cove-48180.herokuapp.com/educationapi/educationapi'

function App() {
  const [searched, setSearched] = useState(false)
  const [search, setSearch] = useState("")
  const [choices, setChoies] = useState([])
  const [schoolId, setSchoolId] = useState(null)
  const [schoolData, setSchoolData] = useState({})
  
  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    axios.get(`${url}?school.name=${search}&fields=id,school.name`).then(res => {
      console.log(res.data.results)
      setChoies(res.data.results)
      setSearched(true)
    })
  }

  const handleChooseSchool = (e) => {
    e.preventDefault()
    setSchoolId(e.target.value)
  }
  
  const handleSchoolData = (e) => {
    e.preventDefault()
    if(schoolId) {
      axios.get(`${url}?id=${schoolId}`).then(res => {
        console.log(res.data.results)
        setSchoolData(res.data.results[0])
      })
    }
  }

  return (
  <div className="App">
     
      
      {!searched ? 
      <>
      <label htmlFor="school-search">Search school:</label>
      <input type="search" id="school-search"
       aria-label="Search for a school" list="school-names" autoComplete="off" onChange={handleChange}/>

      <button onClick={handleSearch}>Search</button>
      </>
 
      : 
      <>
      <label htmlFor="choose-school">Choose School Name:</label>
      <select id="choose-school" onChange={handleChooseSchool} required defaultValue="Choose the name of your school">
        <option disabled>Choose the name of your school</option>
        {choices.map(choice => {
          return (
            <option id={choice.id} key={choice.id} value={choice.id}>{choice["school.name"]}</option>
          )
        })}
      </select>
      
      <button onClick={handleSchoolData}>See Data For School</button>
      <button onClick={()=>setSearched(false)}>New Search</button> 
      </>}
      
      {schoolData && <ScoreCard data={schoolData}/>}

      
</div>

  );
}

export default App;
