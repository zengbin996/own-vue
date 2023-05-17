import { tcbApp } from './index';

export const loginAnonymous = async () => {
  const auth = tcbApp.auth({ persistence: 'local' });
  return await auth.anonymousAuthProvider().signIn();
};
