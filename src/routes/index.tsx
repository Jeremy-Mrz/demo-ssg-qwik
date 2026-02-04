import { component$ } from "@qwik.dev/core";
import { Link, type DocumentHead } from "@qwik.dev/router";

export const dynamicIds = [1, 2];

export default component$(() => {
  return (
    <>
      <h1>Home</h1>
      <Link href="static">Static</Link>
      <div class="ssg">
        {dynamicIds.map((id) => <Link key={id}  href={`ssg/${id}?q=${id}`}>Link - SSG - Dynamic - {id}</Link>)}
        {dynamicIds.map((id) => <a key={id}  href={`ssg/${id}?q=${id}`}>Anchor - SSG - Dynamic - {id}</a>)}
      </div>
      <div class="no-ssg">
        {dynamicIds.map((id) => <Link key={id}  href={`no-ssg/${id}?q=${id}`}>Link - No SSG - Dynamic - {id}</Link>)}
        {dynamicIds.map((id) => <a key={id}  href={`no-ssg/${id}?q=${id}`}>Anchor - No SSG - Dynamic - {id}</a>)}
      </div>

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
