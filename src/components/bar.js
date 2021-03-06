/**
 * Where we keep the links to the pages
 */

import React from 'react';
import PropTypes from 'prop-types';
import btc_logo from '../logos/btc.png';
import eth_logo from '../logos/eth.png';
import xtz_logo from '../logos/xtz.png';
import ltc_logo from '../logos/ltc.png';

// Logo sources
const LOGOS = {
  btc: btc_logo,
  eth: eth_logo,
  xtz: xtz_logo,
  ltc: ltc_logo
};

class BarIcon extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='bar_icon' onClick={this.props.onClick}>
        <img className={this.props.className} src={LOGOS[this.props.value]}/>
      </div>
    );
  }
}

BarIcon.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

class Bar extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClick (coin) {
    // Go up to the App
    this.props.onClick(coin);
  }

  render () {
    return (
      <div className="bar_wrapper">
        <div className="bar">
          {
            this.props.coins.map(
              coin => (
                <BarIcon 
                  key={coin} 
                  value={coin}
                  onClick={() => this.handleClick(coin)}
                  className={ (coin == this.props.curr_coin) ? 'selected' : ''}
                />
              )
            )
          }
        </div>
      </div>
    );
  }
}

Bar.propTypes = {
  coins: PropTypes.array.isRequired,
  curr_coin: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Bar;