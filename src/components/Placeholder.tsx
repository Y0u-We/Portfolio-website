import { BarChart3, Image as ImageIcon } from 'lucide-react';

type Props = {
  label: string;
  className?: string;
  icon?: 'chart' | 'image';
};

export default function Placeholder({ label, className = '', icon = 'chart' }: Props) {
  const Icon = icon === 'image' ? ImageIcon : BarChart3;
  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-ink-100 to-ink-50 dark:from-ink-800 dark:to-ink-900 border border-ink-200/60 dark:border-ink-700/60 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-50 dark:opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(28,117,245,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,117,245,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative text-center px-4">
        <Icon className="h-7 w-7 mx-auto text-ink-400 dark:text-ink-500 mb-2" />
        <p className="text-[11px] font-medium text-ink-400 dark:text-ink-500 uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
}
