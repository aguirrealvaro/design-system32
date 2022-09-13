import { FunctionComponent, ReactNode } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { Alert as AlertIcon } from "@styled-icons/remix-fill/Alert";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { StyledIcon as StyledIconType } from "styled-icons/types";
import { theme } from "../App";
import { StyledIcon } from "../StyledIcon";

type VariantType = "default" | "positive" | "negative" | "warning" | "neutral";

type AlertProps = {
  children: ReactNode;
  variant?: VariantType;
};

export const Alert: FunctionComponent<AlertProps> = ({ children, variant = "default" }) => {
  return (
    <Container variant={variant}>
      <span>{children}</span>
      <div>
        <StyledIcon
          icon={variantIcons[variant].icon}
          size="18px"
          color={variantIcons[variant].color}
        />
      </div>
    </Container>
  );
};

const variantIcons: Record<VariantType, { icon: StyledIconType; color: string }> = {
  default: { icon: InfoCircleFill, color: theme.colors.blue },
  positive: { icon: CheckCircleFill, color: theme.colors.green },
  warning: { icon: AlertIcon, color: theme.colors.yellow },
  negative: { icon: CloseCircle, color: theme.colors.red },
  neutral: { icon: InfoCircleFill, color: theme.colors.black },
};

const variantStyles: Record<VariantType, FlattenSimpleInterpolation> = {
  default: css`
    color: #004085;
    background-color: #cce5ff;
    border: 1px solid #b8daff;
  `,
  positive: css`
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
  `,
  negative: css`
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
  `,
  warning: css`
    color: #856404;
    background-color: #fff3cd;
    border: 1px solid #ffeeba;
  `,
  neutral: css`
    color: #1b1e21;
    background-color: #d6d8d9;
    border: 1px solid #c6c8ca;
  `,
};

const Container = styled.div<{ variant: VariantType }>`
  padding: 1rem 1.25rem;
  border-radius: 8px;
  ${({ variant }) => variantStyles[variant]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;