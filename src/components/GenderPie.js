import { PieChart, Pie, Legend, Cell, Tooltip} from 'recharts';

const GenderPie = ({data, colors, pieLabler}) => {
 
    const gender = [
        { name:"Male" , 
        value: data.student.demographics.men 
        },
        { name:"Female" , 
        value: data.student.demographics.women 
        }
    ]

    return (
        <div>
            <PieChart width={400} height={400}>
                <Legend verticalAlign="top" height={36}/>
                <Tooltip formatter={ (value, name, props) => `${(value * 100).toFixed(1)}%` } />
                <Pie data={gender} 
                label={pieLabler}
                dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
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