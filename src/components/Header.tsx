import React from "react"
import {StyledSearchSection, StyledSearchButton, StyledSearchBar} from "../styled-components/Styles"

type HeaderProps = {
    handleSearch: (query: string) => void
}

const Header: React.FC<HeaderProps> = ({ handleSearch }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        const formData = new FormData(e.currentTarget)
        const searchQuery = formData.get("searchQuery") as string
        handleSearch(searchQuery)
    }

    return (
        <StyledSearchSection>
            <h1>React Movie Search</h1>
            
            <form onSubmit={handleSubmit}>
                <StyledSearchBar
                    type="search"
                    placeholder="Movie Name"
                    name="searchQuery"
                />
                <StyledSearchButton type="submit">Search!</StyledSearchButton>
            </form>
        </StyledSearchSection>
    )
}

export default Header
