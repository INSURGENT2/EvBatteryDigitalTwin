import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  // Updated section header with project-specific language
  const sectionHeader = {
    title: 'Industry Testimonials',
    paragraph: 'Our AI-powered solution is transforming the EV battery assembly process. Hear how industry leaders are optimizing efficiency, reducing costs, and improving sustainability with real-time insights and advanced predictive modeling.'
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

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner" style={{ backgroundColor: '#111', border: '1px solid #A1FFC4' }}>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0" style={{ color: '#A1FFC4' }}>
                    — "Implementing this AI-driven digital twin solution has revolutionized our EV battery module assembly. We've seen a significant reduction in downtime and improved resource utilization across the board."
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider" style={{ borderColor: '#A1FFC4' }}>
                  <span className="testimonial-item-name text-color-high" style={{ color: '#fff' }}>Roman Level</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0" style={{ color: '#A1FFC4' }}>Tech Innovations Corp</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{ backgroundColor: '#111', border: '1px solid #A1FFC4' }}>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0" style={{ color: '#A1FFC4' }}>
                    — "The real-time predictive insights have drastically reduced our component failure rates. The AI model gives us the ability to make data-driven decisions with immediate impact on production efficiency."
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider" style={{ borderColor: '#A1FFC4' }}>
                  <span className="testimonial-item-name text-color-high" style={{ color: '#fff' }}>Diana Rynzhuk</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0" style={{ color: '#A1FFC4' }}>GreenTech Systems</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner" style={{ backgroundColor: '#111', border: '1px solid #A1FFC4' }}>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0" style={{ color: '#A1FFC4' }}>
                    — "This solution has exceeded our expectations. We've reduced production time by 15% and increased our overall energy efficiency. The AI recommendations are a game-changer for manufacturing."
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider" style={{ borderColor: '#A1FFC4' }}>
                  <span className="testimonial-item-name text-color-high" style={{ color: '#fff' }}>Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0" style={{ color: '#A1FFC4' }}>EVPower Solutions</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;