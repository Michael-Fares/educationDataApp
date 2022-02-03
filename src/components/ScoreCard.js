import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import React, { useState } from 'react'

const ScoreCard = ({data}) => {

  const [raceLables, setRaceLabels] = useState(["AIAN", "NHPI", "Asian", "White", "Unknown", "Hispanic", "Mixed-Race", "Non Resident Alien"])
  const [raceData, setRaceData] = useState([10, 20, 30, 40, 30, 50, 30, 90])

  data = data.latest

    // pieChart colors:

    const colors =  [
      '#FF0000',
      '#5C7AEA',
      '#34BE82',
      '#FFA900',
      '#C6D57E',
      '#88E0EF',
      '#2F86A6',
      '#911F27',
      '#FFCC66',
      '#0E918C'
    ]

    const pieDataRace = {
      labels: raceLables,
      datasets: [{
        label: `Racial/Enthic Demographics`,
        data: raceData,
        backgroundColor: colors,
        borderColor:["black"],
        borderWidth: 2
      }]
    }; 

  return (
  <>
    <h1>{data.school.name}</h1>
    <section>
      <h2>School Facts</h2>
      <p>{`Faculty salary average: $${data.school.faculty_salary}`}</p>
      <p>{`Fulltime faculty rate: $${(data.school.ft_faculty_rate * 100).toFixed(1)}%`}</p>
      {/* fix this? <a href={data.school.price_calculator_url} target="_blank">Link to price calculator</a> */}
      <p>{`Tuition revnue per FTE: $${data.school.tuition_revenue_per_fte}`}</p>
      <p>{`Instructional expenditure per FTE: $${data.school.instructional_expenditure_per_fte}`}</p>
    </section>
    <section>
      <h2>Student Body</h2>
      <p>{`Undergraduate enrollment: ${data.student.enrollment.undergrad_12_month}`}</p>
      <p>{`Graduate enrollment: ${data.student.enrollment.grad_12_month}`}</p>
      <p>{`Students 25 or older: ${(data.student.share_25_older * 100).toFixed(1)}%`}</p>
      <p>{`Students over 23 at entry: ${(data.student.demographics.over_23_at_entry * 100).toFixed(1)}%`}</p>
      <p>{`Part-time students: ${(data.student.part_time_share * 100).toFixed(1)}%`}</p>
      <p>{`First generation students: ${(data.student.demographics.first_generation  * 100).toFixed(1)}%`}</p>
      <p>{`Men: ${(data.student.demographics.men * 100).toFixed(1)}%`}</p>
      <p>{`Women: ${(data.student.demographics.women * 100).toFixed(1)}%`}</p>
      <p>{`Median household income: $${data.student.demographics.median_hh_income}`}</p>
      <p>{`Average family income: $${data.student.demographics.avg_family_income}`}</p>
      <p>{`American Indian/Alaska Native: ${(data.student.demographics.race_ethnicity.aian * 100).toFixed(1)}%`}</p>
      <p>{`Native Hawaiian and Pacific Islander:  ${(data.student.demographics.race_ethnicity.nhpi * 100).toFixed(1)}%`}</p>
      <p>{`Asian: ${(data.student.demographics.race_ethnicity.asian * 100).toFixed(1)}%`}</p>
      <p>{`Black: ${(data.student.demographics.race_ethnicity.black * 100).toFixed(1)}%`}</p>
      <p>{`White: ${(data.student.demographics.race_ethnicity.white * 100).toFixed(1)}%`}</p>
      <p>{`Hispanic: ${(data.student.demographics.race_ethnicity.hispanic * 100).toFixed(1)}%`}</p>
      <p>{`Unknown: ${(data.student.demographics.race_ethnicity.unknown * 100).toFixed(1)}%`}</p>
      <p>{`Mixed-Race: ${(data.student.demographics.race_ethnicity.two_or_more * 100).toFixed(1)}%`}</p>
      <p>{`Non-Resident-Alien: ${(data.student.demographics.race_ethnicity.non_resident_alien * 100).toFixed(1)}%`}</p>
      <Chart type="pie" data={pieDataRace}/>
    </section>
    <section>
      <h2>Cost</h2>
    </section>
    <section>
      <h2>Earnings</h2>
    </section>
    <section>
      <h2>Completion</h2>
    </section>
    <section>
      <h2>Admissions</h2>
    </section>
   
      
      
      
    
  </>
  )
}

export default ScoreCard;