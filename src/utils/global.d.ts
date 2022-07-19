declare module '@bugfender/rn-bugfender' {
  const Bugfender: {
    init: (key: string) => void;
    d: (tag: string, message: string) => void;
    w: (tag: string, message: string) => void;
    e: (tag: string, message: string) => void;
    setDeviceString: (value: string, key: string) => void;
    sendIssue: (title: string, description: string) => void;
  };

  export default Bugfender;
}
