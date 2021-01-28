import React from 'react'
import Autosuggest from 'react-autosuggest'
import { escapeRegexCharacters } from '../utils'

const Search = ({ data, handleOnChange, searchedValue }) => {
  const [suggestions, setSuggestions] = React.useState([])

  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim())

    if (escapedValue === '') {
      return []
    }

    const regex = new RegExp('\\b' + escapedValue, 'i')

    return data.filter((item) => regex.test(getSuggestionValue(item)))
  }

  const getSuggestionValue = (suggestion) =>
    `${suggestion.name} | ${suggestion.platform}`

  const renderSuggestion = (suggestion) => {
    return (
      <div className="suggestions">
        {suggestion.name} - {suggestion.platform}
      </div>
    )
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => setSuggestions([])

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: 'Search',
    value: searchedValue,
    onChange: handleOnChange,
  }

  const renderInputComponent = (inputProps) => (
    <div className="inputContainer">
      <input {...inputProps} />

      <i className="fas fa-search"></i>
    </div>
  )

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      className="input-search"
      renderInputComponent={renderInputComponent}
    />
  )
}

// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default Search
