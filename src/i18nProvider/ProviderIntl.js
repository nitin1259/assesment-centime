import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./constants";
import messages from "./messages";

const ProviderIntl = ({ children, locale }) => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

ProviderIntl.displayName = "I18nProvider";

ProviderIntl.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  locale: PropTypes.oneOf(Object.values(LOCALES)),
};

ProviderIntl.defaultProps = {
  locale: LOCALES.ENGLISH,
};

export default ProviderIntl;
