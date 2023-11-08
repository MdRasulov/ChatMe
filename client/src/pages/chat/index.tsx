import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';
import { ChatMessages } from './ChatMessages';

const Chat = () => {
  return (
    <div className="h-full bg-bgLight">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Chat;
