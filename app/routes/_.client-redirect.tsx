import {
  Await,
  useLoaderData,
  redirect,
  type ClientLoaderFunctionArgs,
} from '@remix-run/react';
import { UnwrapAwaitError } from '~/components/UnwrapAwaitError';
import { UnwrapAwaitValue } from '~/components/UnwrapAwaitValue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function clientLoader(_: ClientLoaderFunctionArgs) {
  return {
    promise: Promise.reject(redirect('/')),
  };
}

export default function Component() {
  const loaderData = useLoaderData<typeof clientLoader>();
  return (
    <Await resolve={loaderData.promise} errorElement={<UnwrapAwaitError />}>
      <UnwrapAwaitValue />
    </Await>
  );
}
