import clsx from 'clsx';

interface Item {
  avatarText: string;
  username: string;
  timestamp: string;
  messages: string[];
  avatarColor?: string;
  isOwn?: boolean;
}

export default function MessageItem({
  avatarText,
  username,
  timestamp,
  messages,
  avatarColor = '#1a2a6e',
  isOwn = false,
}: Item) {
  return (
    <div
      className={clsx('flex items-start gap-2', isOwn && 'flex-row-reverse')}
    >
      <div
        title={username}
        role="img"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
        style={{ background: avatarColor }}
      >
        {avatarText}
      </div>

      <div className={clsx('flex flex-col gap-1', isOwn && 'items-end')}>
        <div
          className={clsx(
            'flex items-baseline gap-2',
            isOwn && 'flex-row-reverse'
          )}
        >
          <span
            className={clsx(
              'text-sm font-semibold',
              isOwn ? 'text-indigo-400' : 'text-slate-100'
            )}
          >
            {username}
          </span>
          <span className="text-xs text-slate-500">{timestamp}</span>
        </div>

        {messages.map((text, i) => (
          <div
            key={i}
            className={clsx(
              'max-w-sm rounded-2xl px-3 py-2 text-sm leading-relaxed',
              isOwn
                ? 'rounded-tr-sm bg-indigo-900/60 text-indigo-100'
                : 'rounded-tl-sm bg-slate-800 text-slate-200'
            )}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
