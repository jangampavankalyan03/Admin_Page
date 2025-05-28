import { GENRE } from "../data";

import Check_Box from "../Input_Fields/Check_Box";

export default function Genre({ ref }) {
  const genre = GENRE.map((item, index) => (
    <Check_Box
      key={item.id}
      text={item.theme}
      ref={(el) => (ref.current[index] = el)}
      value={item.theme}
    />
  ));
  return (
    <fieldset className="flex p-1 w-300 gap-5 flex-wrap">
      <legend className="fieldset-legend font-bold">Genre</legend>
      {genre}
    </fieldset>
  );
}
