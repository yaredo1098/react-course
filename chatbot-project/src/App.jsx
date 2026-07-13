
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import './App.css'




function ChatMessage({ message, sender }) {

  return (
    <div className={
      sender ==
        'user' ? 'chat-message-user' :
        'chat-message-robot'
    }>

      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}

      <div className="chat-message-text">
        {message}
      </div>

      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {

  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }

  }, [chatMessages]);


  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = useState([{
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is September 27',
    sender: 'robot',
    id: 'id4'
  }]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
