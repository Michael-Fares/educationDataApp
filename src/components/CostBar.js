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
       
        <ResponsiveContainer width="100%" height={700} >
           <BarChart data={costData} margin={{left: 90, right: 70, top: 10, bottom: 20}} layout="vertical">
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip formatter={(value, name, props) => `$${value}`}/>
                <YAxis label={{ value: 'Income level', offset: 75, angle: -90, position: 'left' }} dataKey="Income level" type="category" />
    
                <XAxis orientation="top" label={{ value: 'Avg net cost', position: 'top',}} dataKey="Average net cost based on income level" unit="$" type="number"/>
                <Legend iconSize={20} verticalAlign="top" height={100} formatter={(value, entry, index) => <span className="legend-text">{value}</span>}/>
                <Bar dataKey="Average net cost based on income level" fill="#219F94">
                  <LabelList dataKey="Average net cost based on income level" position="right" formatter={(value) => `$${value}`} />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
   
    )
}

export default CostBar;