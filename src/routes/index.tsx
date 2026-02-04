import { component$ } from "@qwik.dev/core";
import { Link, type DocumentHead } from "@qwik.dev/router";

export const dynamicIds = [0];

export default component$(() => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Link</th>
            <th>Tag</th>
            <th>Works</th>
            <th>Has onStaticGenerate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4}>Static page</td>
          </tr>
          <tr>
            <td><Link href="static">Click</Link></td>
            <td>Link</td>
            <td>✅</td>
            <td>No</td>
          </tr>
          <tr>
            <td colSpan={4}>Dynamic params</td>
          </tr>
          <tr>
            <td><Link href={`ssg/${0}?q=${0}`}>Click</Link></td>
            <td>Link</td>
            <td>✅</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><a href={`ssg/${0}?q=${0}`}>Click</a></td>
            <td>Anchor</td>
            <td>✅</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><Link href={`no-ssg/${0}?q=${0}`}>Click</Link></td>
            <td>Link</td>
            <td>⚠️</td>
            <td>No</td>
          </tr>
          <tr>
            <td><a href={`no-ssg/${0}?q=${0}`}>Click</a></td>
            <td>Anchor</td>
            <td>⚠️</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
