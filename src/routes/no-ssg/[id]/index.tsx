import { component$ } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";
import { useLocation } from "@qwik.dev/router";

export default component$(() => {
  const location = useLocation();
  const index = location.params['id'];
  const queryParams = location.url.searchParams.get('q');
  return (
    <>
      <table>
        <thead>
          <tr>
            <td colSpan={4}><b>No SGG</b> dynamic page</td>
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
            <td>No</td>
            <td><Link href="/">Home</Link></td>
          </tr>
        </tbody>
      </table>
    </>
  )
})