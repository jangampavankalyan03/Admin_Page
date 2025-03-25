export default function Check_Box({ text, ref, value, isDef }) {
  return (
    <span className="flex gap-2">
      <input
        type="checkbox"
        defaultChecked={isDef === "Yes"}
        className="checkbox"
        ref={ref}
        value={value}
      />
      {text}
    </span>
  );
}
