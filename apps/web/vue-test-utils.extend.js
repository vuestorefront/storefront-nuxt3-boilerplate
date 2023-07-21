import { config } from '@vue/test-utils';

const FindTestIdPlugin = (wrapper) => {
  function findByTestId(testId) {
    return wrapper.find(`[data-testid='${testId}']`);
  }

  return {
    findByTestId,
  };
};

const GetTestIdPlugin = (wrapper) => {
  function getByTestId(testId) {
    return wrapper.get(`[data-testid='${testId}']`);
  }

  return {
    getByTestId,
  };
};

config.plugins.VueWrapper.install(FindTestIdPlugin);
config.plugins.VueWrapper.install(GetTestIdPlugin);

config.global.mocks = {
  $t: (key) => key,
  $d: (date) => date.toLocaleDateString(),
};
config.global.stubs = {
  RouterLink: true,
};
