import React from 'react';
import {FormattedMessage} from 'react-intl';
import { injectIntl } from 'react-intl';

const TuitionDates = React.createClass({
    propTypes: {
        startDate: React.PropTypes.string.isRequired,
        endDate: React.PropTypes.string.isRequired,
        days: React.PropTypes.string.isRequired,
        hours: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired
    },
    _formatPrice(num) {
        return '$' + num.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    },
    render() {
        return (
            <div className={this.props.price ? 'row' : 'row full'}>
                <div className="cell">
                    {this.props.startDate.replace(/[a-z]+$/i, '')}<sup>{this.props.startDate.match(/\d+(.*)/)[1]}</sup>
                    &nbsp;- &nbsp;
                    {this.props.endDate.replace(/[a-z]+$/i, '')}<sup>{this.props.endDate.match(/\d+(.*)/)[1]}</sup>
                </div>
                <div className="cell">{this.props.days}</div>
                <div className="cell">{this.props.hours}</div>
                <div className="cell">
                    {this.props.price
                        ? this.props.earlyBird
                        ? this._formatPrice(this.props.price - 500)
                        : this._formatPrice(this.props.price)
                        : this.props.intl.formatMessage({id: "tables.tuitionDates.full", defaultMessage: "Full"})}
                    {this.props.earlyBird
                        ? <span>
                            <span className="fa fa-bolt" aria-hidden="true"/>
                            <span className="sr-only">
                                <FormattedMessage
                                    id="tables.TuitionDates.earlyBird"
                                    defaultMessage="Early bird price"
                                />
                            </span>
                        </span>
                        : null}
                </div>
            </div>

        );
    }
});

export default injectIntl(TuitionDates);
