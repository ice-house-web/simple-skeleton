export default {
  '*.{js,jsx,ts,tsx,css}': ['prettier --write --ignore-unknown'],
  '*.{js,jsx,ts,tsx}': ['eslint --no-ignore --fix', 'git add'],
};
