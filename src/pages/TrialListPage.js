import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'globals/routes';
import trials from 'trials/trials';
import isNonEmptyArray from 'utils/js/isNonEmptyArray';
import { addS } from 'utils/string/plurals';
import ATargetBlank from 'components/ATargetBlank';

import './TrialListPage.css';


function TrialItem(props) {
  const { slug, refs } = props;
  return (
    <div className="trial-item">
      <Link className="trial-slug" to={routes.trialBySlugWithValue(slug)}>{slug}</Link>

      <div className="trial-ref-label">{addS('Reference', refs.length > 1)}</div>
      {
        isNonEmptyArray(refs) &&
        refs.map((ref) => {
          return (
            <div key={ref} className="trial-ref">
              <ATargetBlank
                href={ref}
              >
                {ref}
              </ATargetBlank>
            </div>
          );
        })
      }
    </div>
  );
}


function TrialListPage(props) {
  return (
    <div className="trial-list-page">
      <h1>Trials - Coding Challenges</h1>
      {
        trials.map((trial) => {
          const { id, slug, refs } = trial;
          return (
            <TrialItem
              key={id}
              slug={slug}
              refs={refs}
            />
          )
        })
      }
    </div>
  );
}


export default TrialListPage;