const routes = {
  home: '/',
  trials: '/trials',
  trialBySlug: '/trials/:trialSlug',
  trialBySlugWithValue: function(slugValue) {
    return `/trials/${slugValue}`;
  }
};


export default routes;