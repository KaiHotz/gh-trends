import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { Flex, Heading, Link, Button, Text, Avatar } from '@primer/components';
import { trendSelector } from '../../../../store/trending';
import { useDevelopers } from '../../../../api';
import { messages } from './dictionary';

export const Developers: FC = () => {
  const { formatMessage: fm } = useIntl();
  const { since, prog_lang } = useSelector(trendSelector);

  const color = '#8b949e';

  const { data, isFetching } = useDevelopers({
    since,
    prog_lang,
  });

  console.log(data);

  return (
    <div>
      {data ? (
        data.map((user) => (
          <article key={user.rank} className="Box-row">
            Foo
          </article>
        ))
      ) : (
        <Heading fontSize={24} textAlign="center" m={5}>
          {isFetching ? fm(messages.loading) : fm(messages.no_data)}
        </Heading>
      )}
    </div>
  );
};
