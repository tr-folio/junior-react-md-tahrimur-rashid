import styled from "styled-components";

export const HeaderDiv = styled.div`
    width: 1280px;
    margin: 0 auto;
`;

export const NavMenusDiv = styled.div`
    float: left;
    width: 440px;
    text-align: left;
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
`;

export const ShoppingBagIcon = styled.div`
    padding: 17px 5px;
`;

export const CurrencyCartDiv = styled.div`
    float: left;
    width: 440px;
    text-align: right;
`;

export const CurrencyCartButton = styled.button`
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
    right: 50px;
    padding: 5px 20px 5px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: white;
`;

export const CurrencyDiv = styled.div`
    padding: 5px 0;
    text-align: left;
    &:hover {
        cursor: pointer;
    }
`;