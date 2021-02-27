import React, {useContext} from 'react'
import { SearchBarContainer, SearchImg, SearchInput } from './styles'
import SearchIcon from "../../img/Vector.svg";
import GlobalStateContext from "../../Global/GlobalStateContext";

export default function SearchBar() {
    const {setters} = useContext(GlobalStateContext)

    const handleInput = (event) => {
        setters.setSearchInput(event.target.value)
    }

    return (
        <SearchBarContainer>
            <SearchImg src={SearchIcon} alt="" />
            <SearchInput type="text" placeholder="Search for your sneaker" onChange={handleInput} />
        </SearchBarContainer>
    )
}
