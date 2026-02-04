
import { component$ } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <h1>Static route component</h1>
      <Link href="../">Back</Link>
    </>
  )
})