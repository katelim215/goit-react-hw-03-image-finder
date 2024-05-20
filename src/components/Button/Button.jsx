// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Button.module.css';

// const Button = ({ onClick, children }) => {
//   return (
//     <button type="button" className={styles.button} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export default Button;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button className={styles.Button} onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
