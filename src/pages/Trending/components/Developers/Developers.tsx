import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useDevelopers } from '../../../../api';
import { messages } from './dictionary';

export const Developers: FC = () => {
  const { formatMessage: fm } = useIntl();

  // const { data } = useDevelopers();

  // console.log(data);

  return (
    <ul>
      <li className="Box-row">Box row Dev one</li>
      <li className="Box-row">Box row Dev two</li>
      <li className="Box-row">Box row Dev three</li>
      <li className="Box-row">Box row Dev four</li>
    </ul>
  );
};
