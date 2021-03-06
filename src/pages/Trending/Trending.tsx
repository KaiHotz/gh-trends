import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Heading, Text, BorderBox } from '@primer/components';
import { routePath } from '../../routes';
import { trendSelector } from '../../store/trending';
import { Since } from '../../api';
import { StyledPageHeader, NavBar } from '../../comopnents';
import { Repositories, Developers } from './components';
import { messages } from './dictionary';

export const Trending: FC = () => {
  const { formatMessage: fm } = useIntl();
  const location = useLocation();
  const { since } = useSelector(trendSelector);
  const isDeveloper = location.pathname.includes(routePath.developers);

  return (
    <div>
      <StyledPageHeader>
        <Heading fontSize={32}>{fm(messages.title)}</Heading>
        <Text as="p" ml={3} mr={3} fontSize={16}>
          {fm(messages.description, { value: fm(messages[since as Since]) })}
        </Text>
      </StyledPageHeader>
      <div className="pt-4 position-relative container-lg p-responsive">
        <BorderBox className="Box Box--responsive hx_Box--firstRowRounded0">
          <NavBar showSpokenLang={!isDeveloper} />
          <Switch>
            <Route exact path={routePath.main} component={Repositories} />
            <Route exact path={routePath.developers} component={Developers} />
          </Switch>
        </BorderBox>
      </div>
    </div>
  );
};
