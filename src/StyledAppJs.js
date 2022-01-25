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