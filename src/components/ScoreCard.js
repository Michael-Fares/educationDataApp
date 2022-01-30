
const ScoreCard = ({data}) => {
  return (
    <div className="score-card">
      <h1>{data.latest.school.name}</h1>
      <section className="cost">
      <h1>Cost Data</h1>
      <p>{`Average overall cost per year: $${data.latest.cost.avg_net_price.overall}`}</p>
      </section>
    </div>
  )
}

export default ScoreCard;