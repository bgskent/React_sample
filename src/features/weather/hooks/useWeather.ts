import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@/features/weather/api/getWeather';

export function useWeather(prefectureCode: string) {
  return useQuery({
    queryKey: ['weather', prefectureCode],
    queryFn: () => getWeather(prefectureCode),
  });
}

