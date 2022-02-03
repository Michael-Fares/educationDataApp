import DemographicsPie from "./DemographicsPie";
import EthnicityPie from "./EthnicityPie";
import GenderPie from "./GenderPie";
import FacultyPie from "./FacultyPie";

const ScoreCard = ({data}) => {
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


const pieLabler = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
    <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
    </>
  );
};


  data = data.latest


  return (
  <>
    <h1>{data.school.name}</h1>
    <section>
      <h2>School Facts</h2>
      <FacultyPie data={data} colors={colors} pieLabler={pieLabler}/>
    </section>
    <section>
      <h2>Student Body</h2>
      <section className="data-section">
      <DemographicsPie data={data} colors={colors} pieLabler={pieLabler}/>
      <EthnicityPie data={data} colors={colors} pieLabler={pieLabler}/>
      <GenderPie data={data} colors={colors} pieLabler={pieLabler}/>
      </section>
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