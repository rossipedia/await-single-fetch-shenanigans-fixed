import { useAsyncError } from '@remix-run/react';
import { Unwrap } from './Unwrap';

export function UnwrapAwaitError() {
  const error = useAsyncError();
  return (
    <>
      <h2>
        &lt;Await&gt; <span className="text-red-500">rejected</span>
      </h2>
      <Unwrap value={error} />
    </>
  );
}
