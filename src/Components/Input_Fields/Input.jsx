export default function Input({ type, label, ref }) {
  const additionalProps = type === "time" ? { min: "00:00", max: "04:00" } : {};
  return (
    <fieldset className="fieldset p-1 w-90">
      <legend className="fieldset-legend font-bold">{label}</legend>
      <input
        type={type}
        className="input"
        placeholder="Type here"
        ref={ref}
        {...additionalProps}
      />
    </fieldset>
  );
}
