
export const CalculatorButtons = ({ blockClass, value, functionHandle }) => {
  return <button onClick={() => functionHandle(value)} className={blockClass + '__button btn'}>{value}</button>;
}