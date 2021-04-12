import {IntlProvider} from 'react-intl';
import {LOCALES} from './constants';
import {Fragment} from 'react';

const Provider = ({children, locale = LOCALES.ENGLISH}) => (
    <IntlProvider textComponent={Fragment}
        locale={locale}></IntlProvider>
    
)