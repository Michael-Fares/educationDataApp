

import axios from 'axios';
import React, {useState} from 'react'
import './App.css';
import ScoreCard from "./components/ScoreCard";
import SearchLoading from './components/SearchLoading';
import DataLoading from './components/DataLoading';

const url = 'https://secret-cove-48180.herokuapp.com/educationapi'

function App() {
  const [searching, setSearching] = useState(false)
  const [searched, setSearched] = useState(false)
  const [search, setSearch] = useState("")
  const [choices, setChoies] = useState([])
  const [schoolId, setSchoolId] = useState(null)
  const [fetchingData, setFetchingData] = useState(false)
  const [schoolData, setSchoolData] = useState([])
  
  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearching(true)
    axios.get(`${url}?school.name=${search}&fields=id,school.name`).then(res => {
      console.log(res.data.results)
      setChoies(res.data.results)
      setSearching(false)
      setSearched(true)
    }).catch(err => console.log("error", err))
  }

  const handleChooseSchool = (e) => {
    e.preventDefault()
    setSchoolId(e.target.value)
  }
  
  const handleSchoolData = (e) => {
    e.preventDefault()
    if(schoolId) {
      setFetchingData(true)
      axios.get(`${url}?id=${schoolId}`).then(res => {
        console.log("School Data at 0", res.data.results)
        setFetchingData(false)
        setSchoolData(res.data.results)
      }).catch(err => console.log("error", err))
    }
  }

  return (
  <div className="App">
     
     {searching && <SearchLoading />}
     {fetchingData && <DataLoading />}


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
      
      {schoolData.map(data => {
        return (
          <ScoreCard key={data.latest.school.zip} data={data}/>
        )
      })}
      

      
</div>

  );
}

export default App;
