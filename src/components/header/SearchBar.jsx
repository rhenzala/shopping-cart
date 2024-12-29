import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ data, handleCardClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const filteredSuggestions = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    handleCardClick(suggestion.id);
    setSuggestions([]);
    setShowSuggestions(false);
  };
  return (
    <div className="relative w-64">
      <div className="w-full flex gap-0 text-sm bg-white rounded-md px-2 py-1">
        <button>
          <Search color="#dc2626" size={20} />
        </button>
        <input
          type="search"
          placeholder="Search"
          className="px-2 w-full bg-white outline-none"
          value={searchTerm}
          onChange={handleSearch}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 200);
          }}
          onFocus={() => {
            if (searchTerm) setShowSuggestions(true);
          }}
        />
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border shadow-lg max-h-60 overflow-auto text-sm">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
