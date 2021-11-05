import { fetchAndActivate } from '@firebase/remote-config';
import { useState, useEffect } from 'react';
import RequestStatus from '../../common/enums/RequestStatus';

/**
 * Synchronizes local `RemoteConfig` instance's parameter values with Firebase server-side parameter values.
 * Synchronization must happen first before attempting to get any values from the `RemoteConfig` instance.
 */
const useSynchronizeRemoteConfig = (remoteConfig) => {
  const [isActivated, setIsActivated] = useState(false);
  const [requestStatus, setRequestStatus] = useState(RequestStatus.LOADING);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchValues = async (remoteConfig) => {
      try {
        const isActivated = await fetchAndActivate(remoteConfig);
        setRequestStatus(RequestStatus.SUCCESS);
        setIsActivated(isActivated);

        /* throw new Error('Something terrible happened, abandon ship!'); */
      } catch (error) {
        setRequestStatus(RequestStatus.FAILURE);
        setIsActivated(false);
        setError(error);
      }
    };

    fetchValues(remoteConfig);
  }, [remoteConfig]);

  return { requestStatus, isActivated, error };
};

export default useSynchronizeRemoteConfig;
