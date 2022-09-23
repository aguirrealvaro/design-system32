import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { Alert } from "@styled-icons/remix-fill/Alert";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css, keyframes } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { ToastVariantType, ToastProps } from "./Toast.types";
import { Icon } from "@/components/Icon";
import { useTheme, useToast } from "@/hooks";

const DURATION = 3000;

export const Toast: FunctionComponent<ToastProps> = ({
  children,
  id,
  permanent,
  variant = "default",
}) => {
  const { theme } = useTheme();
  const transitionTime = theme.transitions.normal;

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timeoutRef = useRef<number>(0);

  const toast = useToast();

  useEffect(() => {
    if (permanent) return;

    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsClosing(false);
        toast.remove(id);
      }, transitionTime);
    }, DURATION);
  }, [id, toast, permanent, transitionTime]);

  const closeToast = () => {
    setIsClosing(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      toast.remove(id);
    }, transitionTime);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Container
      onClick={closeToast}
      isClosing={isClosing}
      variant={variant}
      role="alert"
      transitionTime={transitionTime}
    >
      <Icon icon={variantIcons[variant]} size={18} color={theme.colors.grey[1]} />
      <div>{children}</div>
    </Container>
  );
};

const translate = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateX(0); }
`;

const Container = styled.div<{
  isClosing: boolean;
  variant: ToastVariantType;
  transitionTime: number;
}>`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.grey[1]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: 1rem;
  background-color: ${({ theme, variant }) => {
    const backgroundColor: Record<ToastVariantType, string> = {
      default: theme.colors.brand,
      positive: theme.colors.green.base,
      warning: theme.colors.yellow.base,
      negative: theme.colors.red.base,
      neutral: theme.colors.grey[13],
    };

    return backgroundColor[variant];
  }};
  &:last-child {
    margin-bottom: 0;
  }
  animation: ${translate} ${({ transitionTime }) => transitionTime}ms linear;
  ${({ isClosing, transitionTime }) =>
    isClosing &&
    css`
      transform: translateY(-100%);
      transition: transform ${transitionTime}ms linear;
    `}
`;

const variantIcons: Record<ToastVariantType, StyledIcon> = {
  default: InfoCircleFill,
  positive: CheckCircleFill,
  warning: Alert,
  negative: CloseCircle,
  neutral: InfoCircleFill,
};
