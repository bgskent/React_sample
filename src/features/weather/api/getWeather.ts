import type { WeatherData } from '@/features/weather/types/weather';

export const getWeather = async (code: string): Promise<WeatherData> => {
  const response = await fetch(
    `/api-jma/bosai/forecast/data/overview_forecast/${code}.json`
  );
  if (!response.ok) {
    throw new Error(`天気データの取得に失敗しました (HTTP ${response.status})`);
  }
  return response.json();
};

