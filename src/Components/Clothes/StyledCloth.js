import styled from "styled-components";

export const ClothCard = styled.div`
    width: 250px;
    margin: 0 auto;
    &:hover {
        cursor: pointer;
    }
`;

export const SingleClothDiv = styled.div`
    position: relative;
`;

export const ClothImg = styled.img`
    width: 250px;
    height: 250px;
`;

export const SingleClothOutOfStock = styled.div`
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    border: none;
    line-height: 250px;
    vertical-align: middle;
    color: gray;
    font-size: 24px;
`;

export const ClothName = styled.p`
    margin-bottom: 5px;
    color: gray;
    text-align: left;
`;

export const ClothPrice = styled.p`
    margin-top: 0;
    text-align: left;
`;