import { PieChart, Pie, Legend, Cell, Tooltip} from 'recharts';

const FacultyPie = ({data, colors, pieLabler}) => {
 
    const facultyStatus = [
        { name: "Fulltime Faculty" , 
        value: data.school.ft_faculty_rate 
        },
        { name:"Partime Faculty" , 
        value: 1 - data.school.ft_faculty_rate  
        }
    ]

    return (
        <div>
            <PieChart width={800} height={500}>
                <Legend iconSize={20} verticalAlign="top" height={10} formatter={(value, entry, index) => <span className="legend-text">{value}</span>}/>
                <Tooltip formatter={ (value, name, props) => `${(value * 100).toFixed(1)}%` } />
                <Pie data={facultyStatus} 
                label={pieLabler}
                dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8">
                    {
                        facultyStatus.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                </Pie> 
            </PieChart>
        </div>
    )
}

export default FacultyPie;