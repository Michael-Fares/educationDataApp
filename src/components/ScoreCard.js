import DemographicsBar from "./DemographicsBar";
import EthnicityPie from "./EthnicityPie";
import GenderPie from "./GenderPie";
import FacultyPie from "./FacultyPie";
import CostBar from "./CostBar";
import EarningsBar from "./EarningsBar";
import ExpenseBar from "./ExpenseBar";
import EarningsPie from "./EarningsPie";
import RatesBar from "./RatesBar";

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
    <section className="mb">
      <h2>School Facts</h2>
      <section className="data-section">
      <RatesBar data={data} />
      <FacultyPie data={data} colors={colors} pieLabler={pieLabler}/>
    
      <ExpenseBar data={data} />
      </section>
    </section>
    <section className="mb">
      <h2>Student Body</h2>
      
      <section className="data-section">
      
      <EthnicityPie data={data} colors={colors} pieLabler={pieLabler}/>
      <GenderPie data={data} colors={colors} pieLabler={pieLabler}/>
      <DemographicsBar data={data} />
      </section>
    </section>
    <section className="mb"> 
      <h2>Cost</h2>
      <section className="data-section">
      <CostBar data={data}/>
      </section>
    </section>
    <section className="mb">
      <h2>Earnings after entry</h2>
      <EarningsBar data={data}/>
      <EarningsPie data={data} colors={colors} pieLabler={pieLabler}/>
    </section>
   
      
      
      
    
  </>
  )
}

export default ScoreCard;