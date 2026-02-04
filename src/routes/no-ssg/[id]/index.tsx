import { component$ } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";
import { useLocation } from "@qwik.dev/router";

export default component$(() => {
  const location = useLocation();
  const index = location.params['id'];
  const queryParams = location.url.searchParams.get('q');
  return (
    <>
      <h1>No SSG dynamic route component</h1>
      <p><b>Without</b> onStaticGenerate</p>
      <p>Params: {index}</p>
      <p>Search Params: {queryParams ?? 'undefined'}</p>
      <Link href="/">Home</Link>
    </>
  )
})