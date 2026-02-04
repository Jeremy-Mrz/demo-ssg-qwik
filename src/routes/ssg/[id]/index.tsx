import { component$ } from "@qwik.dev/core";
import { Link, useLocation } from "@qwik.dev/router";
import { dynamicIds } from "~/routes";

export default component$(() => {
  const location = useLocation();
  const index = location.params['id'];
  const queryParams = location.url.searchParams.get('q');
  return (
    <>
      <table>
        <thead>
          <tr>
            <td colSpan={4}><b>SSG</b> dynamic page</td>
          </tr>
          <tr>
            <th>Params</th>
            <th>Search params</th>
            <th>Has onStaticGenerate</th>
            <th>Home page</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{index ?? 'undefined'}</td>
            <td>{queryParams ?? 'undefined'}</td>
            <td>Yes</td>
            <td><Link href="/">Home</Link></td>
          </tr>
        </tbody>
      </table>
    </>
  )
})

export const onStaticGenerate = async () => ({
  params: dynamicIds.map((id) => ({ id })),
});