import { XAxis, YAxis, BarChart, Bar, Legend, CartesianGrid, Tooltip, ResponsiveContainer, LabelList} from 'recharts';
const CostBar = ({ data }) => {
    data = data.cost.net_price.consumer.by_income_level
    
    const formatCostData = (obj) => {
        const data = []
        
        for ( let key in obj ) {
          console.log (key, obj[key])
           let formatted = {
            "Income level": `$${key}`,
            "Average net cost based on income level": obj[key]
          }
          data.push(formatted)
        }
        return data
      }

    const costData = formatCostData(data)


    return (
       
        <ResponsiveContainer width="100%" height={400} >
           <BarChart data={costData} margin={{left: 60, right: 60, top: 10, bottom: 20}}>
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip formatter={(value, name, props) => `$${value}`}/>
                <XAxis label={{ value: 'Income level', offset: -15, position: 'insideBottom' }} dataKey="Income level" type="category" />
    
                <YAxis label={{ value: 'Avg net cost', offset: 30, angle: -90, position: 'left',}} dataKey="Average net cost based on income level" unit="$" />
                <Legend iconSize={20} verticalAlign="top" height={100} formatter={(value, entry, index) => <span className="legend-text">{value}</span>}/>
                <Bar dataKey="Average net cost based on income level" fill="#219F94">
                  <LabelList dataKey="Average net cost based on income level" position="top" formatter={(value) => `$${value}`} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
   
    )
}

export default CostBar;