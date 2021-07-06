import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SubNav, Flex } from '@primer/components';
import { trendSelector, setSpokenLanguage, setProgLanguage, setSince } from '../../store/trending';
import { Since, LangCode } from '../../api';
import { routePath } from '../../routes';
import { progLangOpt, spokenLangsOpt, spokenLangs } from '../../constants';
import { Select } from '../Select';
import { messages } from './dictionary';

export interface NavBarProps {
  showSpokenLang: boolean;
}

export const NavBar: FC<NavBarProps> = ({ showSpokenLang }) => {
  const { formatMessage: fm } = useIntl();
  const dispatch = useDispatch();
  const { prog_lang, spoken_language_code, since } = useSelector(trendSelector);

  return (
    <div className="Box-header d-md-flex flex-items-center flex-justify-between">
      <SubNav aria-label="Trending">
        <SubNav.Links>
          <SubNav.Link to={routePath.main} as={NavLink} isActive={() => showSpokenLang}>
            {fm(messages.repositories)}
          </SubNav.Link>
          <SubNav.Link to={routePath.developers} as={NavLink}>
            {fm(messages.developers)}
          </SubNav.Link>
        </SubNav.Links>
      </SubNav>
      <Flex pb={1} pt={1}>
        <div className="d-sm-flex flex-auto">
          {showSpokenLang && (
            <Select
              options={spokenLangsOpt}
              label={fm(messages.spoken_lang, {
                value: <span>{spoken_language_code ? spokenLangs[spoken_language_code as LangCode].name : fm(messages.any)}</span>,
              })}
              filterTxt={fm(messages.spoken_lang_filter)}
              value={spoken_language_code}
              onChange={(value) => dispatch(setSpokenLanguage(value))}
            />
          )}
          <Select
            options={progLangOpt}
            label={fm(messages.lanuage, { value: <span>{prog_lang || fm(messages.any)}</span> })}
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
            label={fm(messages.date_range, { value: <span>{fm(messages[since as Since])}</span> })}
            filterTxt={fm(messages.date_range_filter)}
            value={since}
            onChange={(value) => dispatch(setSince(value))}
          />
        </div>
      </Flex>
    </div>
  );
};
