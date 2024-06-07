import { UserChat } from "../types/UserChat";

export const usersChats: UserChat[] = [
    {
        userName: "Tokyo",
        userId: 2,
        chats: [
            {
                isSource: true,
                data: "Message 1",
                type: "text",
                timestamp: 1717334834264,
                isRecieved: true,
                isSent: true,
                isRead: true,
            },
            {
                isSource: false,
                data: "Reply Message 1",
                type: "text",
                timestamp: 1717334846264,
                isRecieved: true,
                isSent: true,
                isRead: true,
            },
            {
                isSource: true,
                data: "Message 2",
                type: "text",
                timestamp: 1717334847464,
                isRecieved: true,
                isSent: true,
                isRead: true,
            },
            {
                isSource: false,
                data: "Reply Message 2",
                type: "text",
                timestamp: 1717334848664,
                isRecieved: true,
                isSent: true,
                isRead: true,
            }
        ]
    },
    {
        userName: "Denver",
        userId: 3,
        chats: [
            {
                isSource: true,
                data: "Message 1",
                type: "text",
                timestamp: 1717334834264,
                isRecieved: true,
                isSent: true,
                isRead: true,
            },
            {
                isSource: false,
                data: "Reply Message 1",
                type: "text",
                timestamp: 1717334846264,
                isRecieved: true,
                isSent: true,
                isRead: true,
            },
            {
                isSource: true,
                data: "Message 2",
                type: "text",
                timestamp: 1717334847464,
                isRecieved: true,
                isSent: true,
                isRead: true,
            },
            {
                isSource: false,
                data: "Reply Message 2",
                type: "text",
                timestamp: 1717334848664,
                isRecieved: true,
                isSent: true,
                isRead: true,
            }
        ]
    },
    {
        userName: "Rio",
        userId: 4,
        chats: [
            {
                isSource: true,
                data: "Message 1",
                type: "text",
                timestamp: 1717334834264,
                isRecieved: true,
                isSent: true,
                isRead: true,
            },
            {
                isSource: false,
                data: "Reply Message 1",
                type: "text",
                timestamp: 1717334846264,
                isRecieved: true,
                isSent: true,
                isRead: true,
            },
            {
                isSource: true,
                data: "Message 2",
                type: "text",
                timestamp: 1717334847464,
                isRecieved: true,
                isSent: true,
                isRead: true,
            },
            {
                isSource: false,
                data: "Reply Message 2",
                type: "text",
                timestamp: 1717334848664,
                isRecieved: true,
                isSent: true,
                isRead: true,
            }
        ]
    }
];