import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { Flex, Heading, Link, Button, Text, Avatar, Spinner } from '@primer/components';
import { RepoIcon, StarIcon, RepoForkedIcon } from '@primer/octicons-react';
import { trendSelector } from '../../../../store/trending';
import { useRepositories, Since } from '../../../../api';
import { messages } from './dictionary';

export const Repositories: FC = () => {
  const { formatMessage: fm } = useIntl();
  const { since, prog_lang, spoken_language_code } = useSelector(trendSelector);
  const color = '#8b949e';

  const { data, isFetching } = useRepositories({
    since,
    prog_lang,
    spoken_language_code,
  });

  return (
    <div>
      {data ? (
        data.map((repo) => (
          <article key={repo.rank} className="Box-row">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading fontSize={18}>
                <RepoIcon />
                <Link ml={2} href={repo.url}>
                  {repo.repositoryName}
                </Link>
              </Heading>
              <Button fontSize={12}>
                <StarIcon /> {fm(messages.star)}
              </Button>
            </Flex>
            <Text as="p" fontSize={14} sx={{ maxWidth: '75%' }} color={color}>
              {repo.description}
            </Text>
            <Flex justifyContent="space-between" alignItems="center">
              <div>
                <Text as="span" mr={3} fontSize={12} color={color}>
                  {repo.language}
                </Text>
                <Link muted mr={3} href={`${repo.url}/stargazers/`}>
                  <StarIcon /> {` ${repo.totalStars}`}
                </Link>
                <Link muted mr={3} href={`${repo.url}/network/members.${repo.username}`}>
                  <RepoForkedIcon /> {` ${repo.forks}`}
                </Link>
                <Text as="span" mr={3} fontSize={12} color={color}>
                  {fm(messages.build_by)}
                </Text>
                {repo.builtBy.map((user) => (
                  <Link key={user.username} href={user.url}>
                    <Avatar mr={1} src={user.avatar} />
                  </Link>
                ))}
              </div>
              <Text as="p" m={0} fontSize={12} color={color}>
                <StarIcon /> {`${repo.starsSince} ${fm(messages[since as Since])}`}
              </Text>
            </Flex>
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
