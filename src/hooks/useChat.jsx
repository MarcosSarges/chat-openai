import OpenAI from "openai";
import { useState } from "react";

const openAi = new OpenAI({
  //AQUI VAI TEU CODIGO DA OPENAI
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

const useChat = () => {
  const [messages, setMassagens] = useState([]);

  const sendMessage = async (text) => {
    const newMessage = {
      id: messages.length + 1,
      message: text,
      sender: "user",
    };
    setMassagens((prev) => [...prev, newMessage]);

    const response = await openAi.chat.completions.create({
      messages: [{ content: text, role: "system" }],
      model: "gpt-3.5-turbo",
    });

    const botMessage = response.choices
      .map((choice) => {
        return choice.message.content;
      })
      .join("\n");

    const bot = {
      id: messages.length + 1,
      message: botMessage,
      sender: "bot",
    };
    setMassagens((prev) => [...prev, bot]);
  };

  return { sendMessage, messages };
};

export default useChat;
