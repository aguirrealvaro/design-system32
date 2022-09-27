import { FunctionComponent, SelectHTMLAttributes } from "react";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import styled from "styled-components";
import { Icon } from "../Icon";
import { NativeSelectFieldType } from "./NativeSelect.types";
import { useTheme } from "@/hooks";

type NativeSelectProps = {
  options: NativeSelectFieldType[];
};

export const NativeSelect: FunctionComponent<
  NativeSelectProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">
> = ({ value, onChange, options, placeholder }) => {
  const { theme } = useTheme();

  return (
    <Container>
      <SelectContainer value={value} onChange={onChange}>
        <option selected disabled>
          {placeholder}
        </option>
        {options.map(({ label, value, disabled }) => {
          return (
            <option value={value} disabled={disabled}>
              {label}
            </option>
          );
        })}
      </SelectContainer>
      <SideContainer>
        <ChevronWrapper active={false}>
          <Icon icon={ChevronDown} color={theme.colors.grey.base} size={23} />
        </ChevronWrapper>
      </SideContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey[9]};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey[5]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const SelectContainer = styled.select`
  font-size: inherit;
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 1rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
`;

const SideContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

const ChevronWrapper = styled.div<{ active: boolean }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${({ theme }) => theme.transitions.normal}ms ease;
  display: flex;
  align-items: center;
`;