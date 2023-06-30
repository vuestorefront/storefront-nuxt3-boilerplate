module.exports = {
  'apps/**/*.{js,jsx,ts,vue}': ['eslint --fix'],
  '*.json': ['yarn prettier --write'],
};
