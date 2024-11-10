import { useAsyncValue } from '@remix-run/react';
import { Unwrap } from './Unwrap';

export function UnwrapAwaitValue() {
  const data = useAsyncValue();
  return (
    <>
      <h2>
        &lt;Await&gt; <span className="text-green-500">resolved</span>
      </h2>
      <Unwrap value={data} />
    </>
  );
}
