import { XAxis, YAxis, BarChart, Bar, Legend, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const RatesBar = ({ data }) => {
    

    
    const ratesData = [
        { name:"Acceptance rate" , 
        value: (data.admissions.admission_rate.overall * 100).toFixed(1)
        },
        { name:"Retention rate" , 
        value: (data.student.retention_rate.overall.full_time * 100).toFixed(1) 
        },
        { name:"Completion rate" , 
        value: (data.completion.consumer_rate * 100).toFixed(1)
        },
        { name:"Students with federal loan(s)" , 
        value: (data.aid.students_with_any_loan * 100).toFixed(1)
        },
        { name:"Students with Pell Grant" , 
        value: (data.student.students_with_pell_grant * 100).toFixed(1)
        }
    ]
    
  

    return (
       
        <ResponsiveContainer width="99%" height={600} >
           <BarChart data={ratesData} margin={{left: 90, right: 60, top: 10, bottom: 20}} layout="vertical">
           <Legend iconSize={20} height={50} verticalAlign="top" formatter={(value, entry, index) => <span className="legend-text">Key rates</span>}/>
           

                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip formatter={(value, name, props) => [`${value}%`, null]}/>
                <YAxis dataKey="name" type="category" interval={0} />
    
                <XAxis orientation="top" domain={[0,100]} type="number"  dataKey="value" unit="%" />
                <Bar dataKey="value" fill="#2F86A6" maxBarSize={130}>
                    <LabelList dataKey="value" position="right" formatter={(value) => `${value}%`} />
                </Bar>  
            </BarChart>
        </ResponsiveContainer>
   
    )
}

export default RatesBar;