import MessageItem from './MessageItem';

const MOCK_MESSAGES = [
  {
    id: '1',
    avatarText: 'DG',
    avatarColor: '#1a3a2a',
    username: 'Dorian G.',
    timestamp: '11:04',
    messages: [
      'Hi everyone! Checked out Next.js + Supabase — really convenient',
      'Realtime subscriptions out of the box 🚀',
    ],
    isOwn: false,
  },
  {
    id: '2',
    avatarText: 'PP',
    avatarColor: '#2a1a3a',
    username: 'Phillip P.',
    timestamp: '11:09',
    messages: ['Agreed, here is how it looks in code'],
    isOwn: false,
  },
  {
    id: '3',
    avatarText: 'YO',
    avatarColor: '#3a4a8e',
    username: 'you',
    timestamp: '12:41',
    messages: ["it's easier than I thought!", 'just got it running — works ✓✓'],
    isOwn: true,
  },
];

export default function MessageList() {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 py-4">
      {MOCK_MESSAGES.map((msg) => (
        <MessageItem key={msg.id} {...msg} />
      ))}
    </div>
  );
}
