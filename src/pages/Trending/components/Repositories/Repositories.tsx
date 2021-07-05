import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useRepositories } from '../../../../api';
import { messages } from './dictionary';

export const Repositories: FC = () => {
  const { formatMessage: fm } = useIntl();

  // const { data } = useRepositories();

  // console.log(data);

  return (
    <ul>
      <li className="Box-row">Box row Repo one</li>
      <li className="Box-row">Box row Repo two</li>
      <li className="Box-row">Box row Repo three</li>
      <li className="Box-row">Box row Repo four</li>
    </ul>
  );
};
