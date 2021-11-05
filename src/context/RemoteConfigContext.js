import { getRemoteConfig } from '@firebase/remote-config';
import { createContext } from 'react';
import useSynchronizeRemoteConfig from '../hooks/firebase/useSynchronizeRemoteConfig';

export const RemoteConfigContext = createContext();

/**
 * Contains everything related to the `RemoteConfig` instance.
 */
export const RemoteConfigProvider = ({ children }) => {
  const remoteConfig = getRemoteConfig();
  remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
  remoteConfig.defaultConfig = {
    welcome_message: 'This is a default value!',
  };

  const { requestStatus, isActivated, error } = useSynchronizeRemoteConfig(remoteConfig);

  return (
    <RemoteConfigContext.Provider value={{ requestStatus, isActivated, error }}>
      {children}
    </RemoteConfigContext.Provider>
  );
};
