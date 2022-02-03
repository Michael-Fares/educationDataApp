import { PieChart, Pie, Legend, Cell} from 'recharts';

const EthnicityPie = ({data, colors, pieLabler}) => {
 
    const ethnicity = [
        { name:"American Indian/Alaska Native" , 
        value: data.student.demographics.race_ethnicity.aian
        },
        { name:"Native Hawaiian and Pacific Islander" , 
        value: data.student.demographics.race_ethnicity.nhpi
        },
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
        }
    ]

    return (
        <div>
            <PieChart width={400} height={400}>
                <Legend verticalAlign="top" height={60}/>
                <Pie data={ethnicity} 
                label={pieLabler}
                dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                    {
                        ethnicity.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                </Pie> 
            </PieChart>
        </div>
    )
}

export default EthnicityPie;