import React from 'react'
import { SearchBarContainer, SearchImg, SearchInput } from './styles'
import SearchIcon from "../../img/Vector.png";

export default function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchImg src={SearchIcon} alt="" />
            <SearchInput type="text" placeholder="Search for your sneaker" />
        </SearchBarContainer>
    )
}
