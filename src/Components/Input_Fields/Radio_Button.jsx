export default function Radio_Button({ text, isDef, name, ref, value }) {
  return (
    <span className="flex gap-2">
      <input
        type="radio"
        className="radio"
        ref={ref}
        name={name}
        defaultChecked={isDef === "Yes"}
        value={value}
      />
      {text}
    </span>
  );
}
