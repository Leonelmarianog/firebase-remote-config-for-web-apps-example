import { useContext } from 'react';
import { RemoteConfigContext } from '../context/RemoteConfigContext';

const useRemoteConfigContext = () => useContext(RemoteConfigContext);

export default useRemoteConfigContext;
