import { Pagehead, ButtonInvisible } from '@primer/components';
import styled from 'styled-components';

export const StyledPageHeader = styled(Pagehead)`
  border-color: var(--color-border-primary);
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  text-align: center;
  p {
    color: var(--color-text-secondary);
    margin-bottom: 20px;
  }
`;

export const StyledButtonInvisible = styled(ButtonInvisible)`
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-secondary);
  padding: 0 15px;
  span {
    font-weight: bold;
  }
  &:focus {
    box-shadow: none;
  }
  &:after {
    border: 4px solid transparent;
    border-top-color: currentcolor;
    content: '';
    display: inline-block;
    height: 0;
    vertical-align: -2px;
    margin-left: 4px;
    width: 0;
  }
`;
