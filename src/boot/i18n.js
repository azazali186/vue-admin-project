import { createI18n } from "vue-i18n";
import messages from "../i18n/i18nPlugin";

// set locals to local storage
let locale = localStorage.getItem("locale");
localStorage.setItem("locale", locale ? locale : "en");

// Create I18n instance
const i18n = createI18n({
  legacy: false,
  locale: locale,
  globalInjection: true,
  messages
});
export default ({ app }) => {
  // Tell app to use the I18n instance
  app.use(i18n);
};

export { i18n };