const findMaxValue = (series) => {
  let max = 0;
  for (let i = 0; i < series.length; i++) {
    let stackTotal = 0;
    for (let j = 0; j < series[i].length; j++) {
      stackTotal += series[i][j]?.value || 0;
    }
    if (stackTotal > max) max = stackTotal;
  }
  return max;
};

export default function StackedBarChart({ series, legend, noDataMessage }) {
  const maxValue = findMaxValue(series);

  return (
    <div className="w-full h-full flex flex-col justify-end">
      {maxValue === 0 && (
        <div className="grow flex justify-center items-center border-b pb-1">
          {noDataMessage}
        </div>
      )}
      {maxValue !== 0 && (
        <div className="grow flex flex-row border-b pb-1 overflow-hidden animate-grow relative">
          {series.map((stacks, i) => (
            <div
              key={i}
              className={`h-full flex flex-col-reverse ${
                i === 0 ? "ml-0" : "ml-2"
              }`}
              style={{ width: `calc(100% / ${series.length}` }}
            >
              {stacks.map((stack, j) => (
                <div
                  className={`w-full ${stack.color || "bg-teal-100"}`}
                  key={`${i}${j}`}
                  style={{
                    height: `${(stack.value / maxValue) * 100}%`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-row text-center justify-self-end">
        {legend.x.map((leg, i) => (
          <div
            className={`${i === 0 ? "ml-0" : "ml-2"}`}
            key={i}
            style={{ width: `calc(100% / ${series.length}`, height: "20px" }}
          >
            {leg}
          </div>
        ))}
      </div>
    </div>
  );
}
