import { LANGUAGES } from "../data";
import Check_Box from "../Input_Fields/Check_Box";

export default function Languages({ ref }) {
  const language = LANGUAGES.map((item, index) => (
    <Check_Box
      key={item.id}
      text={item.language}
      ref={(el) => (ref.current[index] = el)}
      isDef={item.default}
      value={item.language}
    />
  ));
  return (
    <fieldset className="flex p-1 w-90 gap-5 flex-wrap">
      <legend className="fieldset-legend font-bold">Languages</legend>
      {language}
    </fieldset>
  );
}
