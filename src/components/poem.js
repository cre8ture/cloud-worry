import Typewriter from "./typewriter";
let poem = [
  `The birds have vanished into the sky`,
  `and now the last cloud drains away.`,
  `We sit together the mountain and me,`,
  `until only the mountain remains.`
];

export default function Poem() {
  let poemString = poem.join("\\");
  return (
    <>
      <article>
        <Typewriter text={poemString} />
      </article>
    </>
  );
}
