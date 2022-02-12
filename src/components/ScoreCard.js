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
    <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="center">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
    </>
  );
};


  data = data.latest


  return (
  <>
    <h1 className="school-name mt-sm">{data.school.name}</h1>
    <section className="mb school-facts">
      <h2 className="heading mt-sm">School Facts</h2>
      <section className="data-section">
        <RatesBar data={data} />
        <FacultyPie data={data} colors={colors} pieLabler={pieLabler}/>
      </section>
        <ExpenseBar data={data} />
    </section>

    <section className="mb student-body">
      <h2 className="mb heading">Student Body</h2>
      <section className="data-section">
        <EthnicityPie data={data} colors={colors} pieLabler={pieLabler}/>
        <GenderPie data={data} colors={colors} pieLabler={pieLabler}/>
      </section>
      <DemographicsBar data={data} /> 
    </section>
    <section className="mb cost"> 
      <h2 className="mb heading">Cost</h2>
      <CostBar data={data}/>    
    </section>
    <section className="mb">
      <h2 className="mb heading">Earnings after entry</h2>
      <section className="data-section">
        <EarningsBar data={data}/>
        <EarningsPie data={data} colors={colors} pieLabler={pieLabler}/>
      </section>
    </section> 
  </>
  )
}

export default ScoreCard;