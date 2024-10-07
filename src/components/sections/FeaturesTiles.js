import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Transforming EV Battery Assembly with AI',
    paragraph: 'Our AI-powered solution revolutionizes the EV battery module assembly process by predicting component failures, optimizing production, and simulating future outcomes. Experience improved efficiency, reduced downtime, and sustainable manufacturing powered by data-driven insights.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ backgroundColor: '#1E2746', color: '#A1FFC4' }}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            {/* Tile for Predictive Maintenance */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{ backgroundColor: '#111', border: '1px solid #A1FFC4' }}>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="#A1FFC4" stroke="#111" strokeWidth="2"/>
                      <path d="M32 18V32L40 36" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M32 32L24 36" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="32" cy="32" r="4" fill="#111"/>
                      <path d="M44 44L40 40" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M20 44L24 40" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{ color: '#fff' }}>
                    Predictive Maintenance
                  </h4>
                  <p className="m-0 text-sm" style={{ color: '#A1FFC4' }}>
                    Leverage AI to predict and prevent component failures, minimizing downtime and ensuring continuous, smooth operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile for Process Optimization */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{ backgroundColor: '#111', border: '1px solid #A1FFC4' }}>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="#A1FFC4" stroke="#111" strokeWidth="2"/>
                      <rect x="22" y="22" width="20" height="20" rx="2" fill="#111"/>
                      <path d="M28 32H36" stroke="#A1FFC4" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M32 28V36" stroke="#A1FFC4" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M18 32H22" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M42 32H46" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M32 18V22" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M32 42V46" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{ color: '#fff' }}>
                    Process Optimization
                  </h4>
                  <p className="m-0 text-sm" style={{ color: '#A1FFC4' }}>
                    Real-time data-driven insights optimize your assembly line, reducing production time and improving resource utilization.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile for Efficiency Improvement */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{ backgroundColor: '#111', border: '1px solid #A1FFC4' }}>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="#A1FFC4" stroke="#111" strokeWidth="2"/>
                      <path d="M32 18L38 32H26L32 46" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="32" cy="32" r="2" fill="#111"/>
                      <path d="M24 40L28 36" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M40 40L36 36" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{ color: '#fff' }}>
                    Efficiency Improvement
                  </h4>
                  <p className="m-0 text-sm" style={{ color: '#A1FFC4' }}>
                    Boost energy efficiency and reduce waste through AI-driven decision-making and predictive analytics.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
