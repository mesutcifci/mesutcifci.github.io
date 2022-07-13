import {searchContainer, Input, } from "./style"

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