export type Chat = {
    isSource: boolean;
    data: string;
    type: string;
    timestamp: number;
    isRecieved?: boolean;
    isSent?: boolean;
    isRead?: boolean;
};

export type UserChat = {
    userName: string;
    userId: number;
    chats: Chat[];
};