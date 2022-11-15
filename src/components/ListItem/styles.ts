import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;

    input {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        cursor: pointer;
    }

    label {
        font-weight: bold;
        color: #CCC;
        text-decoration: ${done ? "line-through": "initial"};
    }

    button {
        width: 25px;
        font-size: 12px;
        font-weight: bold;
        border: none;
        padding: 5px;
        border-radius: 50%;
        background-color: purple;
        color: #FFF;
        cursor: pointer;
        transition: all .2s ease;

        &:hover {
            background-color: #580258;
        }
    }
    `
);
