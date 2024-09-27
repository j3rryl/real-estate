"use client";
import { useChat } from "ai/react";
import { useState } from "react";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export default function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  // const [messages, setMessages] = useState<Message[]>([
  //   { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  // ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
    };

    // setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simulate bot response
    // setTimeout(() => {
    //   const botMessage: Message = {
    //     id: messages.length + 2,
    //     text: "Thank you for your message. I'm processing your request.",
    //     sender: "bot",
    //   };
    //   setMessages((prevMessages) => [...prevMessages, botMessage]);
    // }, 1000);
  };

  return (
    <Card className="w-full rounded-none p-5 !h-full !mx-0">
      <CardContent className="!h-4/5">
        <ScrollArea className="!h-full min-h-full pr-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`flex items-start ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <Avatar className="w-8 h-8">
                  <AvatarFallback>
                    {message.role === "user" ? "U" : "B"}
                  </AvatarFallback>
                  <AvatarImage
                    src={
                      message.role === "user"
                        ? "/placeholder.svg?height=32&width=32"
                        : "/placeholder.svg?height=32&width=32"
                    }
                  />
                </Avatar>
                <div
                  className={`mx-2 p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center space-x-2"
        >
          <Input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
