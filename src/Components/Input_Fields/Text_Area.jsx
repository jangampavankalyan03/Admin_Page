export default function Text_Area({ ref }) {
  return (
    <fieldset className="fieldset p-1 gap-5">
      <legend className="fieldset-legend font-bold">Description</legend>
      <textarea
        className="textarea h-24"
        placeholder="Description"
        ref={ref}
      ></textarea>
    </fieldset>
  );
}
