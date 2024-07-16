import { useState, useEffect, useCallback, DependencyList } from 'react';

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}
export type FDF<T> = () => Promise<T>;

export function useFetch<T>(
  fetchData: FDF<T>,
  deps: DependencyList
): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetch = useCallback(() => {
    setState({ data: null, loading: true, error: null });
    fetchData()
      .then((data) => {
        setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        setState({ data: null, loading: false, error });
      });
  }, [fetchData]);

  useEffect(() => {
    fetch();
  }, deps);

  return state;
}