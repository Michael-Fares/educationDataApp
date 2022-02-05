import { XAxis, YAxis, BarChart, Bar, Legend, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const EarningsLine = ({ data }) => {
    data = data.earnings

    
    const medianEarningsData = [
        { "Years after entry": "6", "Median Earnings": data["6_yrs_after_entry"].median },
        { "Years after entry": "7", "Median Earnings": 1 },
        { "Years after entry": "8", "Median Earnings": 1 },
        { "Years after entry": "9", "Median Earnings": 1 },
        { "Years after entry": "10", "Median Earnings": 1 }
    ]
    
     console.log("median", medianEarningsData, data)

    return (
       
        <h1>EARNINGS DATA</h1>
   
    )
}

export default EarningsLine;