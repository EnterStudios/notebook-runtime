export default function variable_reachable(variable) {
  if (variable._id === -3) return false; // Don’t recompute builtins.
  if (variable._visible) return true; // Directly reachable.
  var outputs = new Set(variable._outputs);
  for (const output of outputs) {
    if (output._visible) return true;
    output._outputs.forEach(outputs.add, outputs);
  }
  return false;
}
