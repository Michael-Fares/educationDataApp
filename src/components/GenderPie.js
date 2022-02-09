import { PieChart, Pie, Legend, Cell, Tooltip} from 'recharts';

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
        <div>
            <PieChart width={500} height={600}>
                <Legend iconSize={20}  verticalAlign="top" height={100} formatter={(value, entry, index) => <span className="legend-text">{value}</span>}/>
                <Tooltip formatter={ (value, name, props) => `${(value * 100).toFixed(1)}%` } />
                <Pie data={gender} 
                label={pieLabler}
                dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8">
                    {
                        gender.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                </Pie> 
            </PieChart>
        </div>
    )
}

export default GenderPie;