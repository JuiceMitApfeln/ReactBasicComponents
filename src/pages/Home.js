import React from 'react';
import ProgressBarImplementation from '../components/ProgressBar/ProgressBarImplementation';

export default () => {
  return (
    <>
      <div className="p-home u-flex u-flex-horizontal-center u-flex-vertical-center">
        <div className="u-width-50percent">
          <h1>
            A progressbar
          </h1>
          <div className="u-flex u-flex-horizontal-center u-flex-vertical-center u-margin-auto u-height-100percent">
            <ProgressBarImplementation percentage={45} nrProgressbars={4} />
          </div>
        </div>
      </div>
    </>
  );
}
