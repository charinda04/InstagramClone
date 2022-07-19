/* cSpell:disable */
import Bugfender from '@bugfender/rn-bugfender';

const { setDeviceString } = Bugfender;
const apiKey = 'guWmT3aqXtnk7fPDDHXcvou2ucYi4LLM';

const init = (): void => {
  Bugfender.init(apiKey);
};

const log: (tag: string, message: string) => void = (tag, message) => {
  Bugfender.d(tag, message);
};

const warn: (tag: string, message: string) => void = (tag, message) => {
  Bugfender.w(tag, message);
};

const error: (tag: string, message: string) => void = (tag, message) => {
  Bugfender.e(tag, message);
};

const LoggingService = {
  init,
  log,
  warn,
  error,
  setDeviceString,
};

export default LoggingService;
