import React from "react"
import {StyledMovieCard, StyledMovieDescriptionSection, StyledMoviePosterImg, StyledMovieTitle} from "../styled-components/Styles"

type MovieCardProps = {
    id: number;
    title: string;
    releaseDate: string;
    rating: number;
    description: string;
    imgUrl: string;
  };

const MovieCard: React.FC<MovieCardProps> = ({
    title,
    releaseDate,
    rating,
    description,
    imgUrl
}) => {
    

    return (
        <StyledMovieCard>
                <StyledMoviePosterImg src={imgUrl}/>
            <StyledMovieDescriptionSection>
                <StyledMovieTitle>{title}</StyledMovieTitle>
                <span>{releaseDate ? `RELEASE DATE: ${releaseDate}` : "Coming Soon"}</span>
                <span>RATING: {rating}</span>
                <p>{description}</p>
            </StyledMovieDescriptionSection>
        </StyledMovieCard>
    )
}

export default MovieCard