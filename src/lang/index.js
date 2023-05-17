import { createI18n } from 'vue-i18n';
import znCN from './zh-CN';
import enUS from './en-US';

const i18n = createI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': znCN,
    'en-US': enUS,
  },
});

export default i18n;
