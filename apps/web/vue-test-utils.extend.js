import { createI18n } from 'vue-i18n';
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

const i18n = createI18n({
  legacy: false,
  fallbackWarn: false,
  missing: (_locale, key) => key,
});
config.global.plugins = [i18n];
config.global.mocks = {
  $t: (key) => key,
  $d: (date) => date.toLocaleDateString(),
};
config.global.stubs = {
  RouterLink: true,
  NuxtImg: true,
  'i18n-t': true,
};
