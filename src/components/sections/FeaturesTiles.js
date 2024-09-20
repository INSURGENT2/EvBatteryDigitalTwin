import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

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
      style={{ backgroundColor: '#1E2746', color: '#A1FFC4' }}  // Dark Blue background with Light Green text
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{ backgroundColor: '#111', border: '1px solid #A1FFC4' }}>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
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

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{ backgroundColor: '#111', border: '1px solid #A1FFC4' }}>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
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

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{ backgroundColor: '#111', border: '1px solid #A1FFC4' }}>
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
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

            {/* Additional tiles for more features */}

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;