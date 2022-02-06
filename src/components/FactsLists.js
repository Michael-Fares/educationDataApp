
const FactsList = ({ data }) => {
    return (
        <>
            <div>
                <ul className="flex-column fact-list">
                <li>
                       <span className="fact-label">
                            Tier level:
                       </span>
                       {` ${data.school.institutional_characteristics.level}`}
                    </li> 
                   <li>
                       <span className="fact-label">
                           Acceptance rate: 
                       </span>
                       {` ${(data.admissions.admission_rate.overall * 100).toFixed(1)}%`}
                    </li>
                        
                    <li>
                       <span className="fact-label">
                            Completion rate: 
                       </span>
                       {` ${(data.completion.consumer_rate * 100).toFixed(1)}%`}
                    </li> 
                    <li>
                       <span className="fact-label">
                            Fulltime student retention rate:
                       </span>
                       {` ${(data.student.retention_rate.overall.full_time * 100).toFixed(1)}%`}
                    </li> 
                     
                </ul>
            </div>
        </>
    )
}

export default FactsList;