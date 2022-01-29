import styled from "styled-components";

export const SingleCartItemDiv = styled.div`
    border-top: 2px solid rgb(180, 180, 180);
    box-sizing: border-box;
    padding: 10px 0;
    height: 200px;
    @media only screen and (max-width: 992px) {
        height: 400px;
    }
`;

export const InfoDiv = styled.div`
    float: left;
    width: 70%;
    height: 100%;
    text-align: left;
    @media only screen and (max-width: 992px) {
        width: 100%;
        height: 50%;
    }
`;

export const CountDiv = styled.div`
    float: left;
    width: 10%;
    height: 100%;
    @media only screen and (max-width: 992px) {
        width: 100px;
        height: 50%;
    }
    @media only screen and (max-width: 575px) {
        width: 50px;
    }
`;
export const PlusButton = styled.button`
    font-size: 24px;
    width: 30px;
    padding: 1px 0;
    background: white;
    border: 2px solid gray;
`;
export const MinusButton = styled.button`
    font-size: 24px;
    width: 30px;
    padding: 1px 0;
    background: white;
    border: 2px solid gray;
`;
export const ImgDiv = styled.div`
    position: relative;
    display: block;
    float: left;
    width: 20%;
    height: 100%;
    @media only screen and (max-width: 992px) {
        width: 300px;
        height: 50%
    }
    @media only screen and (max-width: 575px) {
        width: 250px;
    }
`;

export const ProductImg = styled.img`
    width: 150px;
    height: 150px;
`;

export const ButtonRemove = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    border: 2px solid gray;
    padding: 2px 5px;
    &:hover {
        cursor: pointer;
    }
`;