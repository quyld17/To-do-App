export function InputBar({ task, setTask }) {
  return (
    <input
      className="input-bar"
      placeholder="Type here..."
      value={task}
      onChange={(e) => setTask(e.target.value)}
    />
  );
}
