import { XAxis, YAxis, BarChart, Bar, Legend, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
       
        <ResponsiveContainer width="100%" height={400} >
           <BarChart data={expenseData} margin={{left: 90, right: 60, top: 10, bottom: 20}}>
           <Legend height={36} formatter={(value, entry, index) => {return "Instructional expenditures vs. tuition revenue"}} verticalAlign="top"/>

                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip formatter={(value, name, props) => [`$${value}`, null]}/>
                <XAxis dataKey="name" type="category" />
    
                <YAxis type="number"  dataKey="value" unit="$" />
                <Bar dataKey="value" fill="#219F94" maxBarSize={130}/>  
            </BarChart>
        </ResponsiveContainer>
   
    )
}

export default ExpenseBar;