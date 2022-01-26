import styled from "styled-components";

export const HeaderDiv = styled.div`
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

export const NavMenusDiv = styled.div`
    float: left;
    width: 440px;
    text-align: left;
    @media only screen and (max-width: 1280px) {
        width: 300px;
    }
    @media only screen and (max-width: 992px) {
        width: 350px;
    }
    @media only screen and (max-width: 768px) {
        width: 350px;
    }
    @media only screen and (max-width: 575px) {
        width: 300px;
    }
`;

export const HeaderButton = styled.button`
    border: none;
    background: white;
    padding: 20px 20px;
    &:hover {
        color: green;
        border-bottom: 1px solid green;
        cursor: pointer;
    }
`;

export const ShoppingBagIconDiv = styled.div`
    float: left;
    width: 400px;
    @media only screen and (max-width: 1280px) {
        width: 300px;
    }
    @media only screen and (max-width: 992px) {
        width: 350px;
    }
    @media only screen and (max-width: 768px) {
        width: 150px;
    }
    @media only screen and (max-width: 575px) {
        display: none;
    }
`;

export const ShoppingBagIcon = styled.div`
    padding: 17px 5px;
`;

export const CurrencyCartDiv = styled.div`
    float: left;
    width: 440px;
    text-align: right;
    @media only screen and (max-width: 1280px) {
        width: 300px;
    }
    @media only screen and (max-width: 992px) {
        width: 700px;
        text-align: left;
    }
    @media only screen and (max-width: 768px) {
        width: 500px;
        text-align: left;
    }
    @media only screen and (max-width: 575px) {
        width: 300px;
        text-align: left;
    }
`;

export const CurrencyCartButton = styled.button`
    position: relative;
    border: none;
    background: white;
    padding: 20px 5px;
    &:hover {
        cursor: pointer;
    }
`;

export const CurrenciesDiv = styled.div`
    position: absolute;
    display: none;
    top: 50px;
    left: -10px;
    padding: 5px 20px 5px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: white;
    @media only screen and (max-width: 992px) {
        left: 0;
    }
    @media only screen and (max-width: 768px) {
        left: 0;
    }
    @media only screen and (max-width: 575px) {
        left: 0;
    }
`;

export const CurrencyDiv = styled.div`
    padding: 5px 0;
    text-align: left;
    &:hover {
        cursor: pointer;
    }
`;