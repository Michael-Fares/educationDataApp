import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchLoading = () => {
    return (
        <div className="loading-screen">
            <FontAwesomeIcon icon={faSearch} size="10x" className="loading-screen-search"/>
            <h1>Searching...</h1>
        </div>
    )
}

export default SearchLoading;