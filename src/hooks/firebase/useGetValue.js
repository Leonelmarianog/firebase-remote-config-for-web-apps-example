import { getRemoteConfig, getValue } from '@firebase/remote-config';

/**
 * Returns specified value from the remoteConfig.
 */
const useGetValue = (key) => {
  const remoteConfig = getRemoteConfig();
  const { _value: value } = getValue(remoteConfig, key);
  return value;
};

export default useGetValue;
