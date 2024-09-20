import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  const sectionStyle = {
    backgroundColor: '#000',   // Black background
    color: '#00ff00'           // Green text color
  };

  return (
    <>
      <Hero className="illustration-section-01" style={sectionStyle} />
      <FeaturesTiles style={sectionStyle} />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" style={sectionStyle} />
      <Testimonial topDivider style={sectionStyle} />
      <Cta split style={sectionStyle} />
    </>
  );
}

export default Home;
