import styled from 'styled-components';

type RowProps = {
  gap?: number;
  mb?: number;
  mt?: number;
  justifyContent?:
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-end'
    | 'flex-start'
    | 'center';
};

const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : undefined)};
  margin-top: ${(props) => (props.mt ? props.mt + 'px' : undefined)};
  justify-content: ${(props) => props.justifyContent};

  & > * {
    margin-right: ${(props) =>
      props.gap ? props.gap + 'px !important' : undefined};
  }

  & > *:last-child {
    margin-right: 0 !important;
  }
`;

export default Row;
