import { XAxis, YAxis, BarChart, Bar, Legend, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const ExpenseBar = ({ data }) => {
    data = data.school

    
    const expenseData = [
        { name:"Average faculty salary" , 
        value: data.faculty_salary
        },
        { name:"Instructional expenditure per full time student" , 
        value: data.instructional_expenditure_per_fte
        },
        { name:"Tuition revenue per full time student" , 
        value: data.tuition_revenue_per_fte 
        }
    ]
    
     console.log("expense data", expenseData)

    return (
       
        <ResponsiveContainer width="100%" height={500} >
           <BarChart data={expenseData} margin={{left: 90, right: 60, top: 10, bottom: 20}} layout="vertical">
           <Legend iconSize={20} height="15%" formatter={(value, entry, index) => <span className="legend-text">Instructional expenditures vs. Tuition revenue</span>} verticalAlign="top"/>

                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip formatter={(value, name, props) => [`$${value}`, null]}/>
                <YAxis dataKey="name" type="category" />
    
                <XAxis orientation="top" type="number"  dataKey="value" unit="$" />
                <Bar dataKey="value" fill="#219F94" maxBarSize={90}>
                    <LabelList dataKey="value" position="right" formatter={(value) => `$${value}`} />
                </Bar>  
            </BarChart>
        </ResponsiveContainer>
   
    )
}

export default ExpenseBar;