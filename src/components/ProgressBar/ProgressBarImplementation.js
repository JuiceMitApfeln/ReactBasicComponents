import React from 'react';
import { map } from 'lodash';
import ProgressBar from './ProgressBar';

/**
 * @component ProgressBar
 * This component creates a progressbar in which every child progressbar has the same length and the same sharepercentage.
 *
 * @param  {number} percentage The percentage parameter is used to give the percentage to it's child ProgressBars
 * (where it is used to calculate if how much their percentagebar needs to be filled).
 * @param  {string} className The className parameter is used to give a different experience to the progressbar.
 * @param  {number} nrProgressbars The nrProgressbars parameter is used to declare the number of progressbars that the progressbar will be split in.
 *
 * @example
 * <ProgressBarImplementation percentage={45} nrProgressbars={4} /> // will generate 4 smaller progressbars with each displaying 25% of the percentage
 */
const ProgressBarImplementation = ({
  className,
  nrProgressbars,
  percentage = 0,
}) => {
  nrProgressbars = (nrProgressbars > 1) ? nrProgressbars : 1;
  const percentagePerBar = 100 / nrProgressbars;
  const arrayProgressbars = [];
  for (let i = 0; i < nrProgressbars; i += 1) {
    const min = i * percentagePerBar;
    const max = (i + 1) * percentagePerBar;
    arrayProgressbars.push({ min, max });
  }
  return (
    <div className={`u-width-100percent u-flex u-flex-space-between ${className}`}>
      {map(arrayProgressbars, ({ min, max }) => {
        return (
          <ProgressBar
            key={`${min}`}
            percentage={percentage}
            min={min}
            max={max}
            step={percentagePerBar}
          />
        );
      })}
    </div>
  );
};

export default ProgressBarImplementation;
