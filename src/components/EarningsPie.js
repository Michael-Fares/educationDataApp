import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer} from 'recharts';

const EarningsPie = ({data, colors, pieLabler}) => {
    data = data.earnings
    console.log("data", data["6_yrs_after_entry"])
    const earningsSix = [
        { name: "Earning over $28,000 six years after entry" , 
        value: data["6_yrs_after_entry"].percent_greater_than_28000
        },
        { name:"Earning less than $28,000 six years after entry" , 
        value: 1 - data["6_yrs_after_entry"].percent_greater_than_28000
        }
    ]

    const earningsTen = [
        { name: "Earning over $28,000 ten years after entry" , 
        value: data["10_yrs_after_entry"].percent_greater_than_28000
        },
        { name:"Earning less than $28,000 ten years after entry" , 
        value: 1 - data["10_yrs_after_entry"].percent_greater_than_28000
        }
    ]

    return (
   
        <section className="data-section mt">
            <ResponsiveContainer width="99%" height={400}>
                <PieChart >
                    <Legend iconSize={20} verticalAlign="top" height={10} align="left" />
                    <Tooltip formatter={ (value, name, props) => `${(value * 100).toFixed(1)}%` } />
                    <Pie data={earningsSix} 
                    label={pieLabler}
                    dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                        {
                            earningsSix.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index + 1]}/>
                            ))
                        }
                    </Pie>     
                </PieChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="99%" height={400}>
                <PieChart >
                    <Legend iconSize={20} verticalAlign="top" height={10} align="left"/>
                    <Tooltip formatter={ (value, name, props) => `${(value * 100).toFixed(1)}%` } />
                    <Pie data={earningsTen} 
                    label={pieLabler}
                    dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                        {
                            earningsTen.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index + 1]}/>
                            ))
                        }
                    </Pie> 
                </PieChart>
            </ResponsiveContainer>
        </section>
  
    )
}

export default EarningsPie;