import { FunctionComponent } from "react";
import styled from "styled-components";
import { Popover, PopoverProps } from "../Popover";

export const Dropdown: FunctionComponent<PopoverProps> = ({
  children,
  content,
  ...restProps
}) => {
  const popoverContent = <Content>{content}</Content>;

  return (
    <Popover content={popoverContent} gap={8} trigger="click" {...restProps}>
      {children}
    </Popover>
  );
};

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[1]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: 1.2rem;
  width: 200px;
`;
