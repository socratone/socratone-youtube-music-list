import styled from 'styled-components';

type ColumnProps = {
  gap?: number;
  mb?: number;
  mt?: number;
  pl?: number;
  pr?: number;
};

export const Column = styled.div<ColumnProps>`
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : undefined)};
  margin-top: ${(props) => (props.mt ? props.mt + 'px' : undefined)};
  padding-left: ${(props) => (props.pl ? props.pl + 'px' : undefined)};
  padding-right: ${(props) => (props.pr ? props.pr + 'px' : undefined)};

  & > * {
    margin-bottom: ${(props) =>
      props.gap ? props.gap + 'px !important' : undefined};
  }

  & > *:last-child {
    margin-bottom: 0 !important;
  }
`;
