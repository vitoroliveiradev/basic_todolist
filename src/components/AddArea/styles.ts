import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;

    .image {
        margin-right: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer; 

        &:hover {
            color: #FFF;
        }
    }

    input {
        border: none;
        background-color: transparent;
        outline: none;
        color: #FFF;
        font-size: 1rem;
        flex: 1;
    }
`;