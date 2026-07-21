import React from 'react';
import SEO from '../components/layout/SEO';
import ExerciseLibraryPreview from '../components/sections/ExerciseLibraryPreview';

export default function ExerciseLibraryPage() {
  return (
    <>
      <SEO 
        title="Interactive Prescribed Kinesiotherapy & Exercise Library | MotionCare"
        description="Search MotionCare's physical therapy exercise library. Video guides and step-by-step execution instructions for back stretching, neck retraction, and knee strength."
      />
      <div className="pt-8">
        <ExerciseLibraryPreview />
      </div>
    </>
  );
}
