import { styled, css } from "styled-components";

const Row = styled.div`
  display: flex;
  gap: 2.4rem;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      justify-content: space-between;

      flex-direction: column;
    `}

     ${(props) =>
    props.type ||
    css`
      justify-content: space-between;
      flex-direction: column;
    `}
`;

/* Row.defaultProps = {
  type: "vertical",
}; */

export default Row;
