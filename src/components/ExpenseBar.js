import { XAxis, YAxis, BarChart, Bar, Legend, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line} from 'recharts';

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
       
        <ResponsiveContainer width="100%" height={300} >
           <BarChart data={expenseData} margin={{left: 60, right: 60, top: 10, bottom: 20}}>
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip/>
                <XAxis dataKey="name" type="category" />
    
                <YAxis type="number" label={{ value: 'Spending and Revenue', offset: 30, angle: -90, position: 'left',}} dataKey="value" unit="$" />
                <Bar dataKey="value" fill="#219F94" maxBarSize={130}/>  
            </BarChart>
        </ResponsiveContainer>
   
    )
}

export default ExpenseBar;