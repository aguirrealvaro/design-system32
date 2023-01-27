import { FunctionComponent, InputHTMLAttributes, ReactNode, useState } from "react";
import { CheckCircle } from "@styled-icons/material-rounded/CheckCircle";
import { RadioButtonUnchecked } from "@styled-icons/material-rounded/RadioButtonUnchecked";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { CheckboxPositionType, CheckboxSizeType } from "./Checkbox.types";
import { hiddenStyles } from "@/css";
import { useTheme } from "@/hooks";

type CheckboxProps = {
  label: ReactNode;
  helpText?: ReactNode;
  size?: CheckboxSizeType;
  position?: CheckboxPositionType;
  color?: string;
  disabled?: boolean;
};

export const Checkbox: FunctionComponent<
  CheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">
> = ({
  label,
  helpText,
  size = "md",
  position = "left",
  checked,
  color,
  disabled = false,
  ...restProps
}) => {
  const { theme } = useTheme();

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const sizes: Record<CheckboxSizeType, string> = {
    xs: theme.spacing[5],
    sm: theme.spacing[6],
    md: theme.spacing[7],
    lg: theme.spacing[8],
  };

  const iconSize = sizes[size];

  const icon = checked ? CheckCircle : RadioButtonUnchecked;
  const iconColor = color || theme.assets.primary;

  return (
    <label>
      <HiddenInput
        type="checkbox"
        checked={checked}
        aria-checked={checked}
        {...restProps}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Container disabled={disabled} hasHelpText={!!helpText}>
        <IconWrapper position={position} isFocused={isFocused}>
          <Icon
            icon={icon}
            color={disabled ? theme.assets.disabledBg : iconColor}
            size={iconSize}
          />
        </IconWrapper>
        <LabelContainer position={position}>
          <Label size={size}>{label}</Label>
          {helpText && <HelpText>{helpText}</HelpText>}
        </LabelContainer>
      </Container>
    </label>
  );
};

const HiddenInput = styled.input`
  ${hiddenStyles};
`;

const Container = styled.div<{ disabled: boolean; hasHelpText: boolean }>`
  display: flex;
  align-items: ${({ hasHelpText }) => (hasHelpText ? "flex-start" : "center")};
  cursor: pointer;
  gap: ${({ theme }) => theme.spacing[4]};
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        color: ${theme.assets.disabledBg};
      `;
    }
  }}
`;

const IconWrapper = styled.div<{ position: CheckboxPositionType; isFocused: boolean }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
  box-shadow: ${({ theme, isFocused }) => isFocused && theme.shadows["outline-primary"]};
`;

const LabelContainer = styled.div<{ position: CheckboxPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;

const Label = styled.span<{ size: CheckboxSizeType }>`
  display: block;
  font-size: ${({ size, theme }) => {
    const sizes: Record<CheckboxSizeType, string> = {
      xs: theme.typography.fontSizes.xs,
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;

const HelpText = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[3.5]};
  color: ${({ theme }) => theme.assets.textSecondary};
`;
