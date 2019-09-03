import React from 'react';

import { getTrialBySlug } from 'trials/trials';
import asyncLoadingComponent from 'components/loading/asyncLoadingComponent';

import './TrialDetailPage.css';


function TrialDetailPage(props) {
  const { match } = props;

  const containerClassName = 'trial-detail-page';

  const trialSlug = match.params.trialSlug;
  const trial = getTrialBySlug(trialSlug);
  const AsyncTrialSketch = asyncLoadingComponent(trial.loadComponentFunc);

  const sketchParentSelectFunc = _ => document.querySelector(`.${containerClassName}`);

  return (
    <div className={containerClassName}>
      <AsyncTrialSketch
        parentSelectFunc={sketchParentSelectFunc}
      />
    </div>
  );
}


export default TrialDetailPage;