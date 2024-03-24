import React from 'react';
import OffersHome from '../components/Offer/OffersHome';
import BlogsHome from '../components/Blog/BlogsHome';
import Slider from '../components/Slider/Slider';
import ProjectsHome from '../components/Project/ProjectsHome';

export default function Homepage() {
  return (
    <>
        <Slider />
        <OffersHome />
        <BlogsHome />
        <ProjectsHome />
    </>
  )
}
