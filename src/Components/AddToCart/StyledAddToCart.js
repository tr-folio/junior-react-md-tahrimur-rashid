import styled from "styled-components";

export const ProductDescriptionDiv = styled.div`
    width: 1280px;
    height: 500px;
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
    background: red;
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

export const LargeImgDiv = styled.div`
    float: left;
    width: 700px;
    height: 500px;
    background: green;
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

export const DescriptionDiv = styled.div`
    float: left;
    width: 400px;
    height: 500px;
    background: blue;
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