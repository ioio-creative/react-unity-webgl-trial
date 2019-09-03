const trials = [
  {
    id: 1,
    slug: 'space-shooter',
    authors: ['ioio-tech-team'],
    techs: ['unity'],
    hashTags: ['unity', 'web_gl'],
    refs: [
      'https://learn.unity.com/project/space-shooter-tutorial',
    ],
    loadComponentFunc: _ => import('trials/sketches/space-shooter/SpaceShooter'),
  }
];

let trialSlugToTrialMap = {};
trials.forEach((trial) => {
  trialSlugToTrialMap[trial.slug] = trial
});

const getTrialBySlug = (slug) => {
  return trialSlugToTrialMap[slug];
}


export default trials;

export {
  getTrialBySlug
};