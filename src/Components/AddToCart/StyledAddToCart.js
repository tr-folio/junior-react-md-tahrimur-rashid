import styled from "styled-components";

export const ProductDescriptionDiv = styled.div`
    width: 1280px;
    margin: 0 auto;
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

export const SmallImgDiv = styled.div`
    float: left;
    width: 180px;
    height: 500px;
    @media only screen and (max-width: 1280px) {
        width: 150px;
    }
    @media only screen and (max-width: 992px) {
        width: 150px;
    }
    @media only screen and (max-width: 768px) {
        width: 100px;
    }
    @media only screen and (max-width: 575px) {
        width: 50px;
    }
`;

export const SmallDiv = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    @media only screen and (max-width: 575px) {
        width: 50px;
    }
`;

export const SmallImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const LargeImgDiv = styled.div`
    float: left;
    width: 700px;
    height: 500px;
    @media only screen and (max-width: 1280px) {
        width: 450px;
    }
    @media only screen and (max-width: 992px) {
        width: 550px;
    }
    @media only screen and (max-width: 768px) {
        width: 400px;
    }
    @media only screen and (max-width: 575px) {
        width: 250px;
    }
`;

export const LargeDiv = styled.div`
    width: 400px;
    height: 400px;
    margin-left: 20px;
    @media only screen and (max-width: 1280px) {
        width: 350px;
        height: 350px;
    }
    @media only screen and (max-width: 992px) {
        width: 450px;
        height: 450px;
    }
    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
    @media only screen and (max-width: 575px) {
        width: 200px;
        height: 300px;
    }
`;

export const LargeImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const DescriptionDiv = styled.div`
    float: left;
    width: 400px;
    height: 500px;
    @media only screen and (max-width: 1280px) {
        width: 300px;
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

export const NameProductToAdd = styled.h1`
    text-align: left;
`;

export const AttributeName = styled.h4`
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const AttributesDiv = styled.div`
    text-align: left;
`;

export const SingleAttribute = styled.button`
    border: 2px solid black;
    background: white;
    padding: 15px;
    margin-right: 5px;
`;

export const PriceH4 = styled.h4`
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const PriceAmountH4 = styled.h4`
    text-align: left;
    margin: 0;
`;

export const AddToCartButtonDiv = styled.div`
    text-align: left;
`;

export const ButtonAddToCart = styled.button`
    border: none;
    background: limegreen;
    color: white;
    padding: 20px 50px;
    font-size: 18px;
`;

export const DescriptionTextDiv = styled.div`
    text-align: left;
`;