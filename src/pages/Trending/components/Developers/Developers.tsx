import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { Flex, Heading, Link, Button, Text, Avatar, Spinner } from '@primer/components';
import { RepoIcon, FlameIcon } from '@primer/octicons-react';
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

  return (
    <div>
      {data ? (
        data.map((user) => (
          <article key={user.rank} className="Box-row d-flex">
            <Link muted href={`#${user.username}`}>
              {user.rank}
            </Link>
            <div className="mx-3">
              <Link href={user.url}>
                <Avatar size={48} src={user.avatar} />
              </Link>
            </div>
            <div className="d-sm-flex flex-auto">
              <div className="col-sm-8 d-md-flex">
                <div className="col-md-6">
                  <Link href={user.url}>
                    <Heading as="h1" fontSize={20}>
                      {user.name}
                    </Heading>
                  </Link>
                  <Link muted href={user.url}>
                    <Text as="p" fontSize={16}>
                      {user.username}
                    </Text>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Flex alignItems="center">
                    <FlameIcon />
                    <Text as="span" ml={2} fontSize={12} color={color} sx={{ fontWeight: 300, textTransform: 'uppercase' }}>
                      {fm(messages.popular_repo)}
                    </Text>
                  </Flex>
                  <Heading fontSize={18}>
                    <RepoIcon />
                    <Link ml={2} href={user.popularRepository.url}>
                      {user.popularRepository.repositoryName}
                    </Link>
                  </Heading>
                  <Text fontSize={12} color={color}>
                    {user.popularRepository.description}
                  </Text>
                </div>
              </div>
              <Flex className="col-sm-4 ml-sm-3" justifyContent="flex-end" alignItems="start">
                <Button variant="small">{fm(messages.follow)}</Button>
              </Flex>
            </div>
          </article>
        ))
      ) : (
        <Heading fontSize={24} textAlign="center" m={5}>
          {isFetching ? <Spinner /> : fm(messages.no_data)}
        </Heading>
      )}
    </div>
  );
};
