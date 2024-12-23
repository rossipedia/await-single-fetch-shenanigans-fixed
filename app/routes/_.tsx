import { Link, Outlet } from '@remix-run/react';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <div className="prose">
      <h1>Await component shenanigans - with fix in 2.15.2</h1>
      <p>
        Click on the links below. Both routes should <code>reject()</code> with
        the redirected <code>Response</code> instance, regardless of the value
        of <code>v3_singleFetch</code>
      </p>

      <Link to="/">Home</Link>
      <Suspense fallback={<div>Suspended...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
