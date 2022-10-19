import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";

type IconButtonProps = {
  children: ReactNode;
  withHover?: boolean;
};

export const IconButton: FunctionComponent<
  IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, withHover = true, ...props }) => {
  return (
    <Container withHover={withHover} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.button<{ withHover: boolean }>`
  display: flex;
  align-self: baseline;
  line-height: 0;
  padding: ${({ theme }) => theme.spacing[1.5]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: background-color ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  ${({ withHover }) => {
    if (withHover) {
      return css`
        &:hover {
          background-color: ${({ theme }) => theme.assets.iconHover};
        }
      `;
    }
  }}
`;
