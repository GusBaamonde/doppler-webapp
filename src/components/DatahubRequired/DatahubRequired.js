import React from 'react';
import { InjectAppServices } from '../../services/pure-di';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

/**
 * @param { Object } props
 * @param { import('../../services/pure-di').AppServices } props.dependencies
 */
function DatahubRequired({
  dependencies: {
    appSessionRef,
    appConfiguration: { dopplerLegacyUrl },
  },
}) {
  const isFreeAccount =
    appSessionRef.current.userData !== undefined
      ? appSessionRef.current.userData.user.plan.isFreeAccount
      : false;
  const isTrialEnabled = false;
  return (
    <section className="container-reports">
      <div className="dp-datahub-messages">
        {isFreeAccount ? (
          <div>
            <FormattedMessage tagName="h3" id="reports.upgrade_account_free_title" />
            <FormattedHTMLMessage
              tagName="div"
              id="reports.upgrade_account_free_HTML"
              values={{ dopplerBaseUrl: dopplerLegacyUrl }}
            />
          </div>
        ) : !isTrialEnabled ? (
          <div>
            <FormattedMessage tagName="h3" id="reports.allow_enable_trial_title" />
            <FormattedHTMLMessage tagName="div" id="reports.allow_enable_trial_HTML" />
            <div className="dp-datahub-action">
              <button className="dp-button button-medium primary-green">
                <FormattedMessage id="reports.allow_enable_trial_button" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <FormattedMessage tagName="h3" id="reports.datahub_not_active_title" />
            <FormattedHTMLMessage
              tagName="div"
              id="reports.datahub_not_active_HTML"
              values={{ dopplerBaseUrl: dopplerLegacyUrl }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default InjectAppServices(DatahubRequired);
