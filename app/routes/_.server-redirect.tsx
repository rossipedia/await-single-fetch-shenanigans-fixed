import { redirect } from '@remix-run/node';
import {
  Await,
  useLoaderData,
  type ClientLoaderFunctionArgs,
} from '@remix-run/react';
import { UnwrapAwaitError } from '~/components/UnwrapAwaitError';

import { UnwrapAwaitValue } from '~/components/UnwrapAwaitValue';

export function loader() {
  throw redirect('/');
}

export function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  return {
    promise: serverLoader(),
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
