import { XAxis, YAxis, BarChart, Bar, Legend, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { formatData } from '../utilityFunctions';
const CostBar = ({ data }) => {
    data = data.cost.net_price.consumer.by_income_level
    
    const formatCostData = (obj) => {
        const data = []
        
        for ( let key in obj ) {
          console.log (key, obj[key])
           let formatted = {
            "Family income": key,
            "Average net cost": obj[key]
          }
          data.push(formatted)
        }
        return data
      }

    const costData = formatCostData(data)


    return (
       
        <ResponsiveContainer width="100%" height={300} >
           <BarChart data={costData} margin={{left: 60, right: 60, top: 10, bottom: 20}}>
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip/>
                <XAxis label={{ value: 'Family income level', offset: -15, position: 'insideBottom' }} dataKey="Family income" type="category" unit="$" />
    
                <YAxis label={{ value: 'Average net cost', offset: 30, angle: -90, position: 'left',}} dataKey="Average net cost" unit="$" />
                <Legend verticalAlign="top" />
                <Bar dataKey="Average net cost" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
   
    )
}

export default CostBar;