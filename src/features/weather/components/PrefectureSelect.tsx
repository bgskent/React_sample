import { PREFECTURES } from '@/features/weather/constants/prefectures';

interface PrefectureSelectProps {
  value: string;
  onChange: (code: string) => void;
}

export function PrefectureSelect({ value, onChange }: PrefectureSelectProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="pref-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>
        都道府県を選択:
      </label>
      <select
        id="pref-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      >
        {PREFECTURES.map((pref) => (
          <option key={pref.code} value={pref.code}>
            {pref.name}
          </option>
        ))}
      </select>
    </div>
  );
}

