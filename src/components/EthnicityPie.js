import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer} from 'recharts';

const EthnicityPie = ({data, colors, pieLabler}) => {
 
    const ethnicity = [
       
        { name:"Asian" , 
        value: data.student.demographics.race_ethnicity.asian
        },
        { name:"Black" , 
        value: data.student.demographics.race_ethnicity.black
        },
        { name: "White" , 
        value: data.student.demographics.race_ethnicity.white 
        },
        { name: "Hispanic" , 
        value: data.student.demographics.race_ethnicity.hispanic 
        },
        { name: "Unknown" , 
        value: data.student.demographics.race_ethnicity.unknown 
        },
        { name: "Mixed-Race" , 
        value: data.student.demographics.race_ethnicity.two_or_more
        },
        { name: "Non-Resident-Alien" , 
        value: data.student.demographics.race_ethnicity.non_resident_alien
        },
        { name:"American Indian/Alaska Native/Native Hawaiian and Pacific Islander" , 
        value: data.student.demographics.race_ethnicity.aian + data.student.demographics.race_ethnicity.nhpi
        }
    ]

    return (
        <ResponsiveContainer width="100%" height={500}>
            <PieChart margin={{left: 10}}>
                <Legend iconSize={20} align="left" verticalAlign="top" height={100}  formatter={(value, entry, index) => <span className="legend-text">{value}</span>}/>
                <Tooltip formatter={ (value, name, props) => `${(value * 100).toFixed(1)}%` } />
                <Pie data={ethnicity} 
                label={pieLabler}
                dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="60%" fill="#8884d8">
                    {
                        ethnicity.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                </Pie> 
            </PieChart>
        </ResponsiveContainer>
    )
}

export default EthnicityPie;