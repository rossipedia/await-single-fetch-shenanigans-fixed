export function Unwrap({ value }: { value: unknown }) {
  const e =
    value instanceof Response
      ? {
          status: value.status,
          statusText: value.statusText,
          url: value.url,
          headers: Object.fromEntries(value.headers),
        }
      : value;

  return (
    <pre>
      {value instanceof Response ? 'Response ' : ''}
      {JSON.stringify(e, null, 2)}
    </pre>
  );
}
