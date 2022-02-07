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
            <PieChart width={400} height={400}>
                <Legend verticalAlign="top" height={10}/>
                <Tooltip formatter={ (value, name, props) => `${(value * 100).toFixed(1)}%` } />
                <Pie data={facultyStatus} 
                label={pieLabler}
                dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
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