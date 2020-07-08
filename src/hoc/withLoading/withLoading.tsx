import * as React from 'react';


interface LoadingProps {
  loading: boolean;
  loadingMessage?: string;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) => (props: P & LoadingProps) => {
  const { loading, loadingMessage, ...rest } = props;
  const defaultMessage = 'Please wait...';
  return loading ? <p>{loadingMessage || defaultMessage}</p> : <Component {...rest as P} />;
};
export default withLoading;
