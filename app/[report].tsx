import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';

export default function ReportPage() {
  const { report } = useLocalSearchParams<{ report: string }>();

  useEffect(() => {
    if (!report) return;

    const stored = sessionStorage.getItem(report as string);
    if (!stored) return;

    const name = (report as string).replace(/-/g, ' ');

    document.open();
    document.write(stored);
    document.close();

    document.title = name;

    setTimeout(() => window.print(), 500);
  }, [report]);

  return null;
}