import Form from "./components/Form";
import { List, ListItemText } from "@mui/material";

import useChat from "./hooks/useChat";

function App() {
  const { messages, sendMessage } = useChat();

  return (
    <>
      <List>
        {messages.map((message) => {
          return (
            <ListItemText
              key={message.id}
              primary={message.sender === "user" ? "Usuário" : "Bot"}
              secondary={message.message}
            />
          );
        })}
      </List>
      <Form onSubmit={sendMessage} />
    </>
  );
}

export default App;
