import { useState } from 'react';
import { PrefectureSelect, WeatherCard, useWeather } from '@/features/weather';

export function WeatherPage() {
  const [selectedCode, setSelectedCode] = useState<string>('130000');
  const { data: weather, isPending, isError, error } = useWeather(selectedCode);

  return (
    <div>
      <PrefectureSelect value={selectedCode} onChange={setSelectedCode} />

      {isPending && <p>読み込み中...</p>}
      {isError && <p style={{ color: 'red' }}>エラー: {error.message}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

