import { XAxis, YAxis, BarChart, Bar, Legend, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const DemographicsBar = ({ data }) => {
 
    const demographics = [
        { name:"Students 25 or older" , 
        value: (data.student.share_25_older * 100).toFixed(1) 
        },
        { name:"Students over 23 at entry" , 
        value:  (data.student.demographics.over_23_at_entry * 100).toFixed(1) 
        },
        { name:"Part-time students" , 
        value: (data.student.part_time_share  * 100).toFixed(1) 
        },
        { name: "First generation students" , 
        value:  (data.student.demographics.first_generation * 100).toFixed(1) 
        }
    ]

    return (
        <ResponsiveContainer width="100%" height={600} >
           <BarChart data={demographics} margin={{left: 90, right: 60, top: 10, bottom: 20}} layout="vertical">
           <Legend iconSize={20} height={100} verticalAlign="top" formatter={(value, entry, index) => <span className="legend-text">Key demographics</span>}/>
           

                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip formatter={(value, name, props) => [`${value}%`, null]}/>
                <YAxis dataKey="name" type="category" />
    
                <XAxis domain={[0,100]} type="number"  dataKey="value" unit="%" />
                <Bar dataKey="value" fill="#2F86A6" maxBarSize={130}>
                    <LabelList dataKey="value" position="right" formatter={(value) => `${value}%`} />
                </Bar>  
            </BarChart>
        </ResponsiveContainer>
    )
}

export default DemographicsBar;