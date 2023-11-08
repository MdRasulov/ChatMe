import { Message } from './Message';

export const ChatMessages = () => {
  return (
    <div className="h-[calc(100%-9rem)] overflow-scroll scrollbar-hide ">
      <div className="flex flex-col gap-6 w-[min(100%-2rem,55rem)] mx-auto py-6">
        <Message owner={false} />
        <Message owner={true} />
        <Message owner={true} />
        <Message owner={false} />
      </div>
    </div>
  );
};
