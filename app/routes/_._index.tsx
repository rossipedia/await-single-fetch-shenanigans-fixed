import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <ul>
      <li>
        <Link to="/client-redirect">With Client Redirect</Link>
      </li>
      <li>
        <Link to="/server-redirect">With Server Redirect</Link>
      </li>
    </ul>
  );
}
