import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: '#1E2746', color: '#A1FFC4' }}  // Dark Blue background with light green text
    >
      <div className="container">
        <div
          className={innerClasses}
          style={{ borderColor: '#A1FFC4' }}  // Light green border
        >
          <div className="cta-slogan">
            <h3 className="m-0" style={{ color: '#fff' }}>
              Ready to optimize your EV battery production?
            </h3>
          </div>
          <div className="cta-action">
            <Input 
              id="newsletter" 
              type="email" 
              label="Subscribe" 
              labelHidden 
              hasIcon="right" 
              placeholder="Enter your email"
              style={{ 
                backgroundColor: '#1E2746', 
                color: '#A1FFC4', 
                borderColor: '#A1FFC4' 
              }}
            >
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#A1FFC4" />  {/* Light green arrow */}
              </svg>
            </Input>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;