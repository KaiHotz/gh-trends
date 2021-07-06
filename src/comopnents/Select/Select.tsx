import React, { FC, useState, SyntheticEvent, ReactNode } from 'react';
import { SelectMenu } from '@primer/components';
import { StyledButtonInvisible } from '../StyledComponents';

export interface ISelectOption {
  value?: string;
  label: string;
}

export interface ISelectProps {
  options: ISelectOption[];
  label: ReactNode;
  filterTxt: string;
  value?: string;
  onChange: (val?: string) => void;
}

export const Select: FC<ISelectProps> = ({ options, label, filterTxt, value, onChange }) => {
  const [filter, setFilter] = useState('');

  const filteredOptions = options.filter((option) => option.label.toLowerCase().startsWith(filter.toLowerCase()));

  const handleChange = (val?: string) => onChange(val);

  return (
    <SelectMenu css={{}} defaultValue="foo">
      <StyledButtonInvisible as="summary">{label}</StyledButtonInvisible>
      <SelectMenu.Modal>
        <SelectMenu.Filter
          placeholder={filterTxt}
          value={filter}
          aria-label={filterTxt}
          onChange={(e: SyntheticEvent<HTMLInputElement>) => setFilter(e.currentTarget.value)}
        />
        <SelectMenu.List>
          {filteredOptions.map((option) => (
            <SelectMenu.Item key={option.value} selected={value === option.value} onClick={() => handleChange(option.value)}>
              {option.label}
            </SelectMenu.Item>
          ))}
        </SelectMenu.List>
      </SelectMenu.Modal>
    </SelectMenu>
  );
};
