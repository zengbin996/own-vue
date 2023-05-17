import cloudbase from '@cloudbase/js-sdk';
import { env } from '../config';

export const tcbApp = cloudbase.init({ env });
