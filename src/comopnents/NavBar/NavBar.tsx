import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { SubNav, Flex } from '@primer/components';
import { trendSelector, setSpokenLanguage, setProgLanguage, setSince } from '../../store/trending';
import { Since } from '../../api';
import { routePath } from '../../routes';
import { Select } from '../Select';
import { messages } from './dictionary';

export const NavBar: FC = () => {
  const { formatMessage: fm } = useIntl();
  const location = useLocation();
  const dispatch = useDispatch();
  const { prog_lang, spoken_language_code, since } = useSelector(trendSelector);
  const isDeveloper = location.pathname.includes(routePath.developers);

  return (
    <div className="Box-header d-md-flex flex-items-center flex-justify-between">
      <SubNav aria-label="Trending">
        <SubNav.Links>
          <SubNav.Link to={routePath.main} as={NavLink} isActive={() => !isDeveloper}>
            {fm(messages.repositories)}
          </SubNav.Link>
          <SubNav.Link to={routePath.developers} as={NavLink}>
            {fm(messages.developers)}
          </SubNav.Link>
        </SubNav.Links>
      </SubNav>
      <Flex>
        {!isDeveloper && (
          <Select
            options={[
              { value: 'foo', label: 'Foo' },
              { value: 'bar', label: 'Bar' },
            ]}
            label={fm(messages.spoken_lang, { value: spoken_language_code })}
            filterTxt={fm(messages.spoken_lang_filter)}
            value={spoken_language_code}
            onChange={(value) => dispatch(setSpokenLanguage(value))}
          />
        )}
        <Select
          options={[
            { value: 'foo', label: 'Foo' },
            { value: 'bar', label: 'Bar' },
          ]}
          label={fm(messages.lanuage, { value: prog_lang })}
          filterTxt={fm(messages.language_filter)}
          value={prog_lang}
          onChange={(value) => dispatch(setProgLanguage(value))}
        />
        <Select
          options={[
            { value: 'daily', label: fm(messages.daily) },
            { value: 'weekly', label: fm(messages.weekly) },
            { value: 'monthly', label: fm(messages.monthly) },
          ]}
          label={fm(messages.date_range, { value: fm(messages[since as Since]) })}
          filterTxt={fm(messages.date_range_filter)}
          value={since}
          onChange={(value) => dispatch(setSince(value))}
        />
      </Flex>
    </div>
  );
};
