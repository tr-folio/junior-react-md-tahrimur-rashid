import styled from "styled-components";

export const TechProductsDiv = styled.div`
    width: 1280px;
    margin: 0 auto;
    background: yellow;
    @media only screen and (max-width: 1280px) {
        width: 900px;
    }
    @media only screen and (max-width: 992px) {
        width: 700px;
    }
    @media only screen and (max-width: 768px) {
        width: 500px;
    }
    @media only screen and (max-width: 575px) {
        width: 300px;
    }
`;

export const TechProductsH1 = styled.h1`
    text-align: left;
`;

export const AllProductsContainer = styled.div`
    background: white;
`;

export const AllProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 575px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;