import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Spinner } from "../Spinner";
import {
  ButtonKindType,
  ButtonSizeType,
  ButtonVariantType,
  ButtonShapeType,
} from "./Button.types";
import { ThemeType } from "@/css";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  kind?: ButtonKindType;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  shape?: ButtonShapeType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const Button: FunctionComponent<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  onClick,
  block,
  isLoading,
  kind = "solid",
  size = "md",
  variant = "default",
  shape = "default",
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    onClick?.(e);
  };

  const renderChildren = () => {
    if (isLoading) return <Spinner size="xs" background="light" />;
    return (
      <InnerContainer>
        {leftIcon ? leftIcon : null}
        <div>{children}</div>
        {rightIcon ? rightIcon : null}
      </InnerContainer>
    );
  };

  return (
    <CustomButton
      block={block}
      kind={kind}
      size={size}
      variant={variant}
      onClick={handleOnClick}
      shape={shape}
      {...restProps}
    >
      {renderChildren()}
    </CustomButton>
  );
};

const getSizeStyles = (size: ButtonSizeType): FlattenSimpleInterpolation => {
  const sizeOptions: Record<ButtonSizeType, FlattenSimpleInterpolation> = {
    xs: css`
      height: 24px;
      padding: 0rem 8px;
      font-size: 12px;
    `,
    sm: css`
      height: 32px;
      padding: 0 12px;
      font-size: 14px;
    `,
    md: css`
      height: 40px;
      padding: 0 16px;
      font-size: 16px;
    `,
    lg: css`
      height: 48px;
      padding: 0 20px;
      font-size: 18px;
    `,
  };

  return sizeOptions[size];
};

const getShapeStyles = (
  shape: ButtonShapeType,
  theme: ThemeType
): FlattenSimpleInterpolation => {
  const shapeOptions: Record<ButtonShapeType, FlattenSimpleInterpolation> = {
    default: css`
      border-radius: ${theme.borderRadius.sm};
    `,
    pill: css`
      border-radius: ${theme.borderRadius.xl};
    `,
    rectangle: css`
      border-radius: ${theme.borderRadius.none};
    `,
  };

  return shapeOptions[shape];
};

const getColorStyles = (
  variant: ButtonVariantType,
  kind: ButtonKindType,
  theme: ThemeType
): FlattenSimpleInterpolation => {
  const solidStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      background-color: ${theme.colors.blue.base};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.colors.blue.base};
      &:hover {
        background-color: ${theme.colors.blue[5]};
        border-color: ${theme.colors.blue[5]};
      }
    `,
    positive: css`
      background-color: ${theme.colors.green.base};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.colors.green.base};
      &:hover {
        background-color: ${theme.colors.green[5]};
        border-color: ${theme.colors.green[5]};
      }
    `,
    warning: css`
      background-color: ${theme.colors.yellow.base};
      color: ${theme.colors.grey[13]};
      border-color: ${theme.colors.yellow.base};
      &:hover {
        background-color: ${theme.colors.yellow[5]};
        border-color: ${theme.colors.yellow[5]};
      }
    `,
    negative: css`
      background-color: ${theme.colors.red.base};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.colors.red.base};
      &:hover {
        background-color: ${theme.colors.red[5]};
        border-color: ${theme.colors.red[5]};
      }
    `,
    neutral: css`
      background-color: ${theme.colors.grey[13]};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.colors.grey[13]};
      &:hover {
        background-color: ${theme.colors.grey[10]};
        border-color: ${theme.colors.grey[10]};
      }
    `,
  };

  const outlinedHover = theme.colors.grey[3];

  const outlinedStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.colors.blue.base};
      border-color: ${theme.colors.blue.base};
      background-color: ${theme.colors.grey[4]};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    positive: css`
      color: ${theme.colors.green.base};
      border-color: ${theme.colors.green.base};
      background-color: ${theme.colors.grey[4]};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    warning: css`
      color: ${theme.colors.yellow.base};
      border-color: ${theme.colors.yellow.base};
      background-color: ${theme.colors.grey[4]};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    negative: css`
      color: ${theme.colors.red.base};
      border-color: ${theme.colors.red.base};
      background-color: ${theme.colors.grey[4]};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    neutral: css`
      color: ${theme.colors.grey[13]};
      border-color: ${theme.colors.grey[13]};
      background-color: ${theme.colors.grey[4]};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
  };

  const ghostStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.colors.blue.base};
      &:hover {
        background-color: ${theme.colors.blue[1]};
      }
    `,
    positive: css`
      color: ${theme.colors.green.base};
      &:hover {
        background-color: ${theme.colors.green[1]};
      }
    `,
    warning: css`
      color: ${theme.colors.yellow.base};
      &:hover {
        background-color: ${theme.colors.yellow[1]};
      }
    `,
    negative: css`
      color: ${theme.colors.red.base};
      &:hover {
        background-color: ${theme.colors.red[1]};
      }
    `,
    neutral: css`
      color: ${theme.colors.grey[13]};
      &:hover {
        background-color: ${theme.colors.grey[3]};
      }
    `,
  };

  const linkStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.colors.blue.base};
      &:hover {
        text-decoration: underline;
      }
    `,
    positive: css`
      color: ${theme.colors.green.base};
      &:hover {
        text-decoration: underline;
      }
    `,
    warning: css`
      color: ${theme.colors.yellow.base};
      &:hover {
        text-decoration: underline;
      }
    `,
    negative: css`
      color: ${theme.colors.red.base};
      &:hover {
        text-decoration: underline;
      }
    `,
    neutral: css`
      color: ${theme.colors.grey[13]};
      &:hover {
        text-decoration: underline;
      }
    `,
  };

  const primaryStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      border-color: ${theme.colors.grey[5]};
      color: ${theme.colors.grey.base};
      &:hover {
        color: ${theme.colors.blue.base};
        border-color: ${theme.colors.blue.base};
      }
    `,
    positive: css`
      border-color: ${theme.colors.grey[5]};
      color: ${theme.colors.grey.base};
      &:hover {
        color: ${theme.colors.green.base};
        border-color: ${theme.colors.green.base};
      }
    `,
    warning: css`
      border-color: ${theme.colors.grey[5]};
      color: ${theme.colors.grey.base};
      &:hover {
        color: ${theme.colors.yellow.base};
        border-color: ${theme.colors.yellow.base};
      }
    `,
    negative: css`
      border-color: ${theme.colors.grey[5]};
      color: ${theme.colors.grey.base};
      &:hover {
        color: ${theme.colors.red.base};
        border-color: ${theme.colors.red.base};
      }
    `,
    neutral: css`
      border-color: ${theme.colors.grey[5]};
      color: ${theme.colors.grey.base};
      &:hover {
        color: ${theme.colors.grey[13]};
        border-color: ${theme.colors.grey[13]};
      }
    `,
  };

  const colorOptions: Record<ButtonKindType, FlattenSimpleInterpolation> = {
    solid: solidStyles[variant],
    outlined: outlinedStyles[variant],
    ghost: ghostStyles[variant],
    link: linkStyles[variant],
    primary: primaryStyles[variant],
  };

  return colorOptions[kind];
};

const CustomButton = styled.button<{
  block?: boolean;
  kind: ButtonKindType;
  size: ButtonSizeType;
  variant: ButtonVariantType;
  shape: ButtonShapeType;
}>`
  width: ${({ block }) => (block ? "100%" : "auto")};
  border: 1px solid transparent;
  ${({ size }) => getSizeStyles(size)};
  ${({ shape, theme }) => getShapeStyles(shape, theme)};
  ${({ variant, kind, theme }) => getColorStyles(variant, kind, theme)};
  transition: all ${({ theme }) => theme.transitions.normal}ms ease;
  &:disabled {
    background: ${({ theme }) => theme.colors.grey[5]};
    border: 1px solid transparent;
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.grey[7]};
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
