

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
  <>
    <header className="header">
    <article className="app-info">
    <h1>Visual<span className="edu">Edu</span></h1>
    <h4>Data Visualization for the U.S. Department of Education College Scorecard Data</h4>
    </article>
    <nav className={!searched ? "app-actions" : "app-actions active"}>
    {!searched ? 
        <>
        <input type="search" placeholder="search for your school" id="school-search"
        aria-label="Search for a school" list="school-names" onChange={handleChange}/>

        <button className="btn search" onClick={handleSearch}>Search</button>
        </>
  
        : 
        <>
        <select id="choose-school" onChange={handleChooseSchool} required defaultValue="Choose the name of your school from the results">
          <option disabled>
            Choose the name of your school from the results
          </option>
          {choices.map(choice => {
            return (
              <option id={choice.id} key={choice.id} value={choice.id}>{choice["school.name"]}</option>
            )
          })}
        </select>
        
        <button className="btn data" onClick={handleSchoolData}>See Scorecard</button>
        <button className="btn new-search" onClick={()=>setSearched(false)}>New Search</button> 
        </>}
      </nav>
    </header>
    <div className="App">
      
      {searching && <SearchLoading />}
      {fetchingData && <DataLoading />}


       
        
        {schoolData.map(data => {
          return (
            <ScoreCard key={data.latest.school.zip} data={data}/>
          )
        })}  
  </div>
</>
  );
}

export default App;
