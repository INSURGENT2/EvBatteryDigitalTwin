import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const GenericSection = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ 
        backgroundColor: '#1E2746',
        color: '#A1FFC4',
        borderColor: '#A1FFC4'
      }}
    >
      <div className="container">
        <div 
          className={innerClasses}
          style={{
            borderColor: '#A1FFC4'
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

GenericSection.propTypes = propTypes;
GenericSection.defaultProps = defaultProps;

export default GenericSection;