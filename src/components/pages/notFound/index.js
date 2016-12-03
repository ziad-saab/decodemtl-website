import React from 'react';
import {injectIntl, FormattedMessage} from 'react-intl';

export default injectIntl(() => (
  <section className="four-module">
    <div className="wrapper">
  		<h1 className="four-title">404</h1>
  		<p className="four-message text-body-large">
        <code>ReferenceError: the page you want is not defined.</code>
      </p>
  		<p className="foot-note text-body-small text-subtle">
        <FormattedMessage
          id="pages.notFound.unstuck"
          defaultMessage="Try using the menu to get yourself unstuck."
        />
      </p>
    </div>
	</section>
));
