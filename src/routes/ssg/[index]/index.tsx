import { component$ } from "@qwik.dev/core";
import { Link, useLocation } from "@qwik.dev/router";
import { dynamicIds } from "~/routes";

export default component$(() => {
  const location = useLocation();
  const index = location.params['index'];
  const queryParams = location.url.searchParams.get('q');
  return (
    <>
      <h1>SSG dynamic route component</h1>
      <p><b>With</b> onStaticGenerate</p>
      <p>Params: {index}</p>
      <p>Search Params: {queryParams ?? 'undefined'}</p>
      <Link href="/">Home</Link>
    </>
  )
})

export const onStaticGenerate = async () => ({
  params: Object.keys(dynamicIds).map((id) => ({ id })),
});