import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faChartBar } from '@fortawesome/free-solid-svg-icons'

const DataLoading = () => {
    return (
        <div className="loading-screen">
                <FontAwesomeIcon icon={faChartPie} size="5x" className="loading-screen-pie"/>
                <FontAwesomeIcon icon={faChartBar} size="5x" className="loading-screen-bar"/>
            <h1>Visualizing Data...</h1>
        </div>
    )
}

export default DataLoading;