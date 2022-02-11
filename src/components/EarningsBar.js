import { XAxis, YAxis, BarChart, Bar, Legend, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EarningsBar = ({ data }) => {
    data = data.earnings

    
    const meanEarningsData = [
        { 
            "Years after entry": "6 years after entry", 
            "Overall Mean earnings": data["6_yrs_after_entry"].working_not_enrolled.mean_earnings,
            "Male students": data["6_yrs_after_entry"].mean_earnings.male_students,
            "Female students": data["6_yrs_after_entry"].mean_earnings.female_students,
            "Lowest tercile": data["6_yrs_after_entry"].mean_earnings.lowest_tercile,
            "Middle tercile": data["6_yrs_after_entry"].mean_earnings.middle_tercile,
            "Highest tercile": data["6_yrs_after_entry"].mean_earnings.highest_tercile     
        },

        { 
            "Years after entry": "10 years after entry", 
            "Overall Mean earnings": data["10_yrs_after_entry"].working_not_enrolled.mean_earnings,
            "Male students": data["10_yrs_after_entry"].mean_earnings.male_students,
            "Female students": data["10_yrs_after_entry"].mean_earnings.female_students,
            "Lowest tercile": data["10_yrs_after_entry"].mean_earnings.lowest_tercile,
            "Middle tercile": data["10_yrs_after_entry"].mean_earnings.middle_tercile,
            "Highest tercile": data["10_yrs_after_entry"].mean_earnings.highest_tercile    
        }
    ]
    
     console.log("median", meanEarningsData)

    return (
       
        <ResponsiveContainer width="100%" height={700} >
           <BarChart data={meanEarningsData} margin={{left: 40, right: 90, top: 10, bottom: 20}} layout="vertical">
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip formatter={(value, name, props) => [`$${value}`, name]}/>
                <YAxis label={{ value: 'Years since entry', angle: -90, position: 'left' }} dataKey="Years after entry" type="category" />
    
                <XAxis type="number" domain={[0, 'auto']} label={{ value: 'Earnings', position: 'bottom',}} dataKey="Overall Mean earnings" unit="$" />
                <Legend iconSize={20} verticalAlign="top" height={130} formatter={(value, entry, index) => <span className="legend-text">{value}</span>}/>
                <Bar dataKey="Overall Mean earnings" fill="#000000" />
                <Bar dataKey="Male students" fill="#FF0000" />
                <Bar dataKey="Female students" fill="#5C7AEA" />
                <Bar dataKey="Lowest tercile" fill="#C1A3A3" />
                <Bar dataKey="Middle tercile" fill="#886F6F" />
                <Bar dataKey="Highest tercile" fill="#694E4E" />
            </BarChart>
        </ResponsiveContainer>
   
    )
}

export default EarningsBar;