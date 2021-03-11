import { createStore, createLogger } from "vuex";

// import { config as VuexModuleConfig } from 'vuex-module-decorators';
// VuexModuleConfig.rawError = true;

export default createStore({
  strict: import.meta.env.DEV,
  plugins: [createLogger()]
});
