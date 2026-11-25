import type { WeatherData } from '@/features/weather/types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2>{weather.targetArea}の天気概況</h2>
      <p style={{ fontSize: '12px', color: '#666' }}>
        発表: {weather.publishingOffice}（{new Date(weather.reportDatetime).toLocaleString()}）
      </p>
      {weather.headlineText && (
        <p style={{ fontWeight: 'bold', color: '#d9534f' }}>{weather.headlineText}</p>
      )}
      <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{weather.text}</p>
    </div>
  );
}

