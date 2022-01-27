import styled from "styled-components";

export const SingleProductCard = styled.div`
    width: 250px;
    margin: 0 auto;
    &:hover {
        cursor: pointer;
    }
`;

export const SingleProductDiv = styled.div`
    position: relative;
`;

export const SingleProductImg = styled.img`
    width: 250px;
    height: 250px;
`;

export const SingleProductOutOfStock = styled.div`
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

export const AlreadyInCart = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    padding: 10px;
    background: limegreen;
    top: 230px;
    right: 20px;
`;

export const AlreadyInCartImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 30px;
`;

export const SingleProductName = styled.p`
    margin-bottom: 5px;
    color: gray;
    text-align: left;
`;

export const SingleProductPrice = styled.p`
    margin-top: 0;
    text-align: left;
`;