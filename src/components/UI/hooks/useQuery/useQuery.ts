import { useMemo } from 'react';

function useQuery() {
  return useMemo(() => new URL(document.location.toString()).searchParams, [document.location]);
}

export default useQuery;
