import { PieChart, Pie, Legend, Cell, Tooltip} from 'recharts';

const DemographicsPie = ({data, colors, pieLabler}) => {
 
    const demographics = [
        { name:"Students 25 or older" , 
        value: data.student.share_25_older 
        },
        { name:"Students over 23 at entry" , 
        value: data.student.demographics.over_23_at_entry 
        },
        { name:"Part-time students" , 
        value: data.student.part_time_share 
        },
        { name: "First generation students" , 
        value: data.student.demographics.first_generation 
        }
    ]

    return (
        <div>
            <PieChart width={400} height={400}>
                <Legend verticalAlign="top" height={36}/>
                <Tooltip formatter={ (value, name, props) => `${(value * 100).toFixed(1)}%` } />
                <Pie data={demographics} 
                label={pieLabler}
                dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                    {
                        demographics.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                </Pie> 
            </PieChart>
        </div>
    )
}

export default DemographicsPie;