function Filters({
  selectedCategory,
  setSelectedCategory,
  selectedColor,
  setSelectedColor,
  maxPrice,
  setMaxPrice,
  onlyFeatured,
  setOnlyFeatured,
  onlyPromotions,
  setOnlyPromotions,
  clearFilters
}) {
  return (
    <div className="filters-panel">
      <div className="filter-group">
        <label>Categoría</label>
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Snapback">Snapback</option>
          <option value="Curva">Curva</option>
          <option value="Edición Especial">Edición Especial</option>
          <option value="Beanie">Beanie</option>
          <option value="Trucker">Trucker</option>
          <option value="Premium">Premium</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Color</label>
        <select
          value={selectedColor}
          onChange={(event) => setSelectedColor(event.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Negra">Negra</option>
          <option value="Azul">Azul</option>
          <option value="Roja">Roja</option>
          <option value="Beige">Beige</option>
          <option value="Verde">Verde</option>
          <option value="Blanca">Blanca</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Precio máximo: ${maxPrice}</label>
        <input
          type="range"
          min="400"
          max="800"
          step="10"
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
        />
      </div>

      <div className="filter-checks">
        <label className="check-option">
          <input
            type="checkbox"
            checked={onlyFeatured}
            onChange={(event) => setOnlyFeatured(event.target.checked)}
          />
          Solo destacados
        </label>

        <label className="check-option">
          <input
            type="checkbox"
            checked={onlyPromotions}
            onChange={(event) => setOnlyPromotions(event.target.checked)}
          />
          Solo promociones
        </label>
      </div>

      <button className="clear-filters-button" onClick={clearFilters}>
        Limpiar filtros
      </button>
    </div>
  )
}

export default Filters