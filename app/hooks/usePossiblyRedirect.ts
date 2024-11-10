import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';

export function usePossiblyRedirect(error: unknown): boolean {
  const navigate = useNavigate();
  let redirectTo: string | undefined;

  if (!!error && error instanceof Response && isRedirectResponse(error)) {
    redirectTo = error?.headers.get('Location') ?? undefined;
  }

  useEffect(() => {
    if (redirectTo) {
      console.log('----------- <Await> redirecting ------------');
      navigate(redirectTo);
    }
  }, [redirectTo, navigate]);

  return !!redirectTo;
}

function isRedirectResponse(response: Response) {
  return (
    response.status >= 300 &&
    response.status < 400 &&
    response.headers.get('Location')
  );
}
