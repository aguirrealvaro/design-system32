import {
  FunctionComponent,
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useLayoutEffect,
  useState,
  MouseEvent,
} from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { EyeFill } from "@styled-icons/bootstrap/EyeFill";
import { EyeSlashFill } from "@styled-icons/bootstrap/EyeSlashFill";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css } from "styled-components";
import { InputSizeType } from "./Input.types";
import { Spinner, Icon } from "@/components";
import { theme } from "@/components/App";

type InputProps = {
  label?: ReactNode;
  helpText?: ReactNode;
  error?: string;
  isSuccess?: boolean;
  inputId?: string;
  isLoading?: boolean;
  clearValue?: () => void;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  inputSize?: InputSizeType;
};

export const Input: FunctionComponent<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  helpText,
  error,
  isSuccess,
  inputId,
  isLoading,
  clearValue,
  rightIcon,
  leftIcon,
  onChange,
  disabled,
  value,
  type,
  inputSize = "md",
  ...restProps
}) => {
  const [seePassword, setSeePassword] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const onValidChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) onChange?.(e);
  };

  const showLeftContainer = !!leftIcon;

  const showRightContainer: boolean =
    isLoading ||
    !!error ||
    isSuccess ||
    (!!value && !!clearValue) ||
    !!rightIcon ||
    type === "password";

  const showBottom: boolean = !!helpText || !!error;

  const rightContainerRef = useRef<HTMLDivElement>(null);

  const [rightContainerWidth, setRightContainerWidth] = useState<number | undefined>(
    undefined
  );

  useLayoutEffect(() => {
    if (!showRightContainer) return;

    setRightContainerWidth(rightContainerRef.current?.offsetWidth);
  }, [showRightContainer, value]);

  const handleSeePassword = (e: MouseEvent<HTMLButtonElement>) => {
    if (type !== "password") return;
    e.stopPropagation();
    setSeePassword(!seePassword);
  };

  const size = inputSize;

  return (
    <div>
      <Label htmlFor={inputId}>{label}</Label>
      <InputContainer
        disabled={disabled || false}
        error={!!error}
        isSuccess={isSuccess || false}
        onClick={focusInput}
        inputSize={size}
      >
        {showLeftContainer && <LeftContainer>{leftIcon ? leftIcon : null}</LeftContainer>}
        <CustomInput
          id={inputId}
          ref={inputRef}
          disabled={disabled}
          sideWidth={rightContainerWidth}
          value={value}
          onChange={onValidChange}
          type={seePassword ? "text" : type}
          inputSize={size}
          {...restProps}
        />
        {showRightContainer && (
          <RightContainer ref={rightContainerRef}>
            {rightIcon ? rightIcon : null}
            {isLoading && <Spinner size="xs" />}
            {value && clearValue && (
              <ButtonIcon onClick={clearValue}>
                <Icon icon={CloseOutline} color={theme.colors.grey} size={18} />
              </ButtonIcon>
            )}
            {error && <Icon icon={CloseCircle} size={18} color={theme.colors.red} />}
            {isSuccess && <Icon icon={CheckCircleFill} size={18} color={theme.colors.green} />}
            {type === "password" && (
              <ButtonIcon onClick={handleSeePassword}>
                <Icon
                  icon={seePassword ? EyeSlashFill : EyeFill}
                  size={18}
                  color={theme.colors.grey}
                />
              </ButtonIcon>
            )}
          </RightContainer>
        )}
      </InputContainer>
      {showBottom && <BottomText error={!!error}>{error || helpText}</BottomText>}
    </div>
  );
};

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const InputContainer = styled.div<{
  disabled: boolean;
  error: boolean;
  isSuccess: boolean;
  inputSize: InputSizeType;
}>`
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  height: 55px;
  border-radius: 4px;
  ${({ error, isSuccess, theme }) => {
    if (error) {
      return css`
        border: 1px solid ${theme.colors.red};
      `;
    }
    if (isSuccess) {
      return css`
        border: 1px solid ${theme.colors.green};
      `;
    }
    return css`
      border: 1px solid rgba(0, 0, 0, 0.36);
      &:focus-within {
        border: 1px solid ${theme.colors.blue};
      }
    `;
  }};
  height: ${({ inputSize }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: "32px",
      md: "40px",
      lg: "48px",
    };
    return sizes[inputSize];
  }};
  ${({ disabled }) =>
    disabled &&
    css`
      background: #e9e9e9;
      border: 1px solid transparent;
      cursor: not-allowed;
    `};
`;

const LeftContainer = styled.div`
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RightContainer = styled.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CustomInput = styled.input<{
  sideWidth: number | undefined;
  inputSize: InputSizeType;
}>`
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 1rem;
  width: ${({ sideWidth }) => {
    if (sideWidth) {
      return `calc(100% - ${sideWidth}px - 20px)`;
    } else {
      return "100%";
    }
  }};
  font-size: ${({ inputSize }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: "14px",
      md: "16px",
      lg: "18px",
    };
    return sizes[inputSize];
  }};
  &:disabled {
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{ error: boolean }>`
  font-size: 13px;
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"]};
`;

const ButtonIcon = styled.button`
  line-height: 0;
`;
