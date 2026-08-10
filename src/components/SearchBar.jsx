import { FaSearch } from 'react-icons/fa'

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-box">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Buscar por nombre, color, categoría o tipo..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  )
}

export default SearchBar