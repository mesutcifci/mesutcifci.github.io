import {searchContainer, Input } from "./styles"

const SearchInput = () => {

    function changedInput(event) {

    }

    return (
        <searchContainer>
            <Input onChange={changedInput()} type= "text"/>
        </searchContainer>
    )
}

export default SearchInput;