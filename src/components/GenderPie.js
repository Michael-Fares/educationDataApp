import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer} from 'recharts';

const GenderPie = ({data, colors, pieLabler}) => {
 
    const gender = [
        { name:"Male students" , 
        value: data.student.demographics.men 
        },
        { name:"Female students" , 
        value: data.student.demographics.women 
        }
    ]

    return (
        <ResponsiveContainer height={500}>
            <PieChart >
                <Legend iconSize={20}  verticalAlign="top" height={80} formatter={(value, entry, index) => <span className="legend-text">{value}</span>}/>
                <Tooltip formatter={ (value, name, props) => `${(value * 100).toFixed(1)}%` } />
                <Pie data={gender} 
                label={pieLabler}
                dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="60%" fill="#8884d8">
                    {
                        gender.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                </Pie> 
            </PieChart>
        </ResponsiveContainer>
    )
}

export default GenderPie;