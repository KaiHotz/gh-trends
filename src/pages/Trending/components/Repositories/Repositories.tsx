/* eslint-disable */
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { Flex, Heading, Link, Button, Text, Avatar } from '@primer/components';
import { RepoIcon, StarIcon, RepoForkedIcon,  } from '@primer/octicons-react'
import { trendSelector } from '../../../../store/trending';
import { useRepositories, Since } from '../../../../api';
import { messages } from './dictionary';

export const Repositories: FC = () => {
  const { formatMessage: fm } = useIntl();
  const { since, prog_lang, spoken_language_code } = useSelector(trendSelector);

  const { data, isFetching } = useRepositories({
    since,
    prog_lang,
    spoken_language_code
  });

  return (
    <div>
      {data ? data.map((repo) => {

        return(
          <article key={repo.rank} className="Box-row">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading fontSize={18}><RepoIcon /> <Link href={repo.url}>{repo.repositoryName}</Link></Heading>
              <Button fontSize={12}><StarIcon /> {fm(messages.star)}</Button>
            </Flex>
            <Text as="p" fontSize={14} style={{maxWidth: '70%'}}>
              {repo.description}
            </Text>
            <Flex justifyContent="space-between" alignItems="center">
              <div>
                <Text as="span" mr={3} fontSize={12}>{repo.language}</Text>
                <Text as="span" mr={3} fontSize={12}><StarIcon /> {` ${repo.totalStars}`}</Text>
                <Text as="span" mr={3} fontSize={12}><RepoForkedIcon /> {` ${repo.forks}`}</Text>
                <Text as="span" mr={3} fontSize={12}>{fm(messages.build_by)}</Text>
                {repo.builtBy.map(user => (<Avatar key={user.username} mr={1} src={user.avatar} />))}
              </div>
              <Text as="p" m={0} fontSize={12}><StarIcon /> {`${repo.starsSince} ${fm(messages[since as Since])}`}</Text>
            </Flex>
          </article>
        )
      }) : <Heading fontSize={24} textAlign="center" m={5}>{isFetching ? fm(messages.loading) : fm(messages.no_data)}</Heading>
}
    </div>
  );
};
