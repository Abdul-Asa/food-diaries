interface ScoreCardProps {
  score: number;
  metrics: {
    label: string;
    value: string | number;
  }[];
  info: {
    label: string;
    value: string;
  }[];
}

export function ScoreCard({ score, metrics, info }: ScoreCardProps) {
  return (
    <div className="my-8 rounded-lg border border-rose-200 p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Overall Score</h3>
          <div className="mt-2 text-6xl font-bold text-amber-600">{score}</div>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center justify-between gap-4">
              <span className="text-gray-600">{metric.label}</span>
              <span className="font-medium text-amber-600">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {info.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-2">
            <span className="text-gray-600">{item.label}</span>
            <span className="font-medium text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
