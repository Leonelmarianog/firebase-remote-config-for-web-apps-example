import useGetValue from '../hooks/firebase/useGetValue';
import { RemoteConfigProvider } from '../context/RemoteConfigContext';
import useRemoteConfigContext from '../hooks/useRemoteConfigContext';
import RequestStatus from '../common/enums/RequestStatus';

const Heading = () => {
  const { requestStatus, isActivated, error } = useRemoteConfigContext();
  const welcomeMessage = useGetValue('welcome_message');

  return (
    <div>
      <h1 style={{ color: 'lightblue' }}>
        {requestStatus === RequestStatus.LOADING ? 'Loading from remote server...' : welcomeMessage}
      </h1>
      <h1 style={isActivated ? { color: 'lightgreen' } : null}>
        {isActivated
          ? 'Activation was successful'
          : 'Activation was not necessary, results already cached'}
      </h1>
      <h1 style={{ color: 'red' }}>
        {error instanceof Error ? error.message : error ? error : 'Everything is fine'}
      </h1>
    </div>
  );
};

const App = () => (
  <RemoteConfigProvider>
    <Heading />
  </RemoteConfigProvider>
);

export default App;
