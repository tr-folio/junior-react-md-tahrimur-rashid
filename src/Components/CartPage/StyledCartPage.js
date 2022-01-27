import styled from "styled-components";

export const CartDiv = styled.div`
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

export const CartH1 = styled.h1`
    text-align: left;
`;