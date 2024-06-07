import { TextField, Box, Button, Stack, Divider, Typography } from "@mui/material";
import { usersChats } from "data/usersChats";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "types/UserChat";

export default function UsersChats() {
    const [message, setMessage] = useState<string>("");
    const {id} = useParams();

    const userChat = usersChats.find(user => id && user.userId === Number(id));
    const [chats, setChats] = useState(userChat?.chats || []);

    const sendMessage = (message: string) => {
        const newChat: Chat = {
            isRead: true,
            type: "text",
            data: message,
            timestamp: Date.now(),
            isSource: true
        };
        setChats([
            ...chats,
            newChat
        ]);
        setMessage("");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target?.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "Enter" ) {
            sendMessage(message);
        }
    };
    return (
        <Stack height="100vh">
            <Typography variant="h6" padding="10px" textAlign="center">
                {userChat?.userName}
            </Typography>
            <Divider/>
            <Stack sx={{flex: 1}}>
                {chats.map(chat => 
                <Box 
                    key={chat.timestamp} 
                    padding="10px" 
                    marginBottom="5px" 
                    alignSelf={chat.isSource ? "flex-end" : "flex-start"}
                    bgcolor={chat.isSource ? "#cecece" : "white"}>
                    {chat.data}
                </Box>
            )}
            </Stack>
            <Stack direction="row">
            <TextField
                value={message}
                onChange={handleChange} 
                id="outlined-basic" 
                variant="outlined" 
                sx={{flex: 1}} 
                onKeyUp={handleKeyPress}/>
                <Button variant="contained" onClick={() => {sendMessage(message)}}>
                    Send
                </Button>
            </Stack>
        </Stack>
    );
}