import { Link, Outlet } from '@remix-run/react';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <div className="prose">
      <h1>Await component shenanigans</h1>
      <p>
        Click on the links below. With <code>v3_singleFetch: false</code>, both
        routes will <code>reject()</code> with the redirected{' '}
        <code>Response</code> instance.
      </p>
      <p>
        With <code>v3_singleFetch: true</code>, the client redirect will{' '}
        <code>reject()</code>, whereas the server redirect will{' '}
        <code>resolve()</code>.
      </p>
      <Link to="/">Home</Link>
      <Suspense fallback={<div>Suspended...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
