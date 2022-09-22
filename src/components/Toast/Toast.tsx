import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { Alert } from "@styled-icons/remix-fill/Alert";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css, keyframes } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { ANIMATION_TIME, DURATION_TIME } from "./Toast.contants";
import { ToastVariantType, ToastProps } from "./Toast.types";
import { Icon } from "@/components/Icon";
import { useTheme, useToast } from "@/hooks";

export const Toast: FunctionComponent<ToastProps> = ({
  children,
  id,
  permanent,
  variant = "default",
}) => {
  const { theme } = useTheme();

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
      }, ANIMATION_TIME);
    }, DURATION_TIME);
  }, [id, toast, permanent]);

  const closeToast = () => {
    setIsClosing(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      toast.remove(id);
    }, ANIMATION_TIME);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Container onClick={closeToast} isClosing={isClosing} variant={variant} role="alert">
      <Icon icon={variantIcons[variant]} size={18} color={theme.colors.white} />
      <div>{children}</div>
    </Container>
  );
};

const translate = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateX(0); }
`;

const Container = styled.div<{ isClosing: boolean; variant: ToastVariantType }>`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: ${({ theme, variant }) => {
    const backgroundColor: Record<ToastVariantType, string> = {
      default: theme.palette.blue.base,
      positive: theme.palette.green.base,
      warning: theme.palette.yellow.base,
      negative: theme.palette.red.base,
      neutral: theme.palette.grey[13],
    };

    return backgroundColor[variant];
  }};
  &:last-child {
    margin-bottom: 0;
  }
  animation: ${translate} ${ANIMATION_TIME}ms linear;
  ${({ isClosing }) =>
    isClosing &&
    css`
      transform: translateY(-100%);
      transition: transform ${ANIMATION_TIME}ms linear;
    `}
`;

const variantIcons: Record<ToastVariantType, StyledIcon> = {
  default: InfoCircleFill,
  positive: CheckCircleFill,
  warning: Alert,
  negative: CloseCircle,
  neutral: InfoCircleFill,
};
