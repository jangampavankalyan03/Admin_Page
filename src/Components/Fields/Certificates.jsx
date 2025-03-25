import { CERTIFICATES } from "../data";
import Radio_Button from "../Input_Fields/Radio_Button";

export default function Certificates({ ref }) {
  const certificate = CERTIFICATES.map((item) => (
    <Radio_Button
      key={item.id}
      text={item.certificate}
      isDef={item.default}
      name="certificates"
      ref={ref}
      value={item.certificate}
    />
  ));
  return (
    <fieldset className="flex p-1 w-90 gap-5 flex-wrap">
      <legend className="fieldset-legend font-bold">Certificates</legend>
      {certificate}
    </fieldset>
  );
}
