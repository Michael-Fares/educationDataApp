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
       
        <ResponsiveContainer width="100%" height={300} >
           <BarChart data={meanEarningsData} margin={{left: 60, right: 60, top: 10, bottom: 20}}>
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip formatter={(value, name, props) => [`$${value}`, name]}/>
                <XAxis label={{ value: 'Years since entry', offset: -15, position: 'insideBottom' }} dataKey="Years after entry" type="category" />
    
                <YAxis type="number" domain={[0, 'dataMax']} label={{ value: 'Earnings', offset: 30, angle: -90, position: 'left',}} dataKey="Overall Mean earnings" unit="$" />
                <Legend verticalAlign="top" height={65}/>
                <Bar dataKey="Overall Mean earnings" fill="#000000" />
                <Bar dataKey="Male students" fill="#DA1212" />
                <Bar dataKey="Female students" fill="#11468F" />
                <Bar dataKey="Lowest tercile" fill="#C1A3A3" />
                <Bar dataKey="Middle tercile" fill="#886F6F" />
                <Bar dataKey="Highest tercile" fill="#694E4E" />
            </BarChart>
        </ResponsiveContainer>
   
    )
}

export default EarningsBar;