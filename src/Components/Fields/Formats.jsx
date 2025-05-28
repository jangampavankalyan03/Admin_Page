import { FORMATS } from "../data";

import Check_Box from "../Input_Fields/Check_Box";

export default function Formats({ ref }) {
  const format = FORMATS.map((item, index) => (
    <Check_Box
      key={item.id}
      text={item.format}
      ref={(el) => (ref.current[index] = el)}
      isDef={item.default}
      value={item.format}
    />
  ));
  return (
    <fieldset className="flex p-1 w-300 gap-5 flex-wrap">
      <legend className="fieldset-legend font-bold">Format</legend>
      {format}
    </fieldset>
  );
}
