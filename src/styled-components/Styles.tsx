import styled from "styled-components"

const StyledSearchSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em 0 1.5em;  
`

const StyledSearchBar = styled.input`
    border: 1px solid grey;
    border-radius: 22px;
    padding: 0.5em 0;
    margin: 2em 0 1em 0;
    width: 85%;
    text-align: center;
    font-size: 1rem;

    @media (max-width: 1023px) {
        width: 100%;
        margin-bottom: 1em;
    }
`
const StyledSearchButton = styled.button`
    background-color: rgba(0,0,0,0.75);
    border: none;
    color: white;
    padding: 0.7em 1.5em;
    border-radius: 20px;
    margin-left: 0.2em;
    font-size: 1rem;
    
    @media (max-width: 1023px) {
        width: 100%;
        margin-left: 0;
    }
`
const StyledMovieCard = styled.div`
    display: flex;
    padding: 1em 0 1em 2.5em;
    width: 100%;
    background-color: white;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.25);
    border-radius: 12px;

    @media (max-width: 767px) {
        flex-direction: column;
        padding-left: 1em
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        flex-direction: column;
    }
`
const StyledMovieDescriptionSection = styled(StyledMovieCard)`
    flex-direction: column;
    box-shadow: none;
    gap: 1em;
    padding: 2em 3em 3em 1em;
`
const StyledMoviePosterImg = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 200px;
    min-width: 200px;
    max-height: 300px;
`

const StyledMovieTitle = styled.h2`
    font-size: 1.8rem;
    color: #2f3438
`
const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.2em 0;
`

export {
    StyledSearchSection, 
    StyledSearchButton, 
    StyledSearchBar, 
    StyledMovieCard, 
    StyledMovieDescriptionSection, 
    StyledMoviePosterImg, 
    StyledMovieTitle,
    StyledMovieList,
}