import { create } from "zustand"
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";



export const useChatStore = create((set, get) => ({


  messages : [],
  users : [],
  isSelectedUser: null,
  isMessageLoading: false,
  isUsersLoading: false,
  isSendingMessage: false,
  isFetchingMessages: false,


  // To get users in the sidebar
  getUsers: async () => {

    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      console.log("Error fetching users:", error);
      toast.error(error.response?.data?.message || "Error fetching users");
    } finally {
      set({ isUsersLoading: false });
    }
  },


  // To get message of a user I selected
  getMessages: async (userId) => {
    set({ isMessageLoading: true });

    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      console.log("Error fetching messages:", error);
      toast.error(error.response?.data?.message || "Error fetching messages");
    } finally {
      set({ isMessageLoading: false });
    }
  },


  // To send message to a user I selected
  sendMessage: async (messageData) => {
    set({ isSendingMessage: true });
    const { selectedUser, messages } = get();

    try {
      const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
      set({ messages: [...messages, res.data] });
    } catch (error) {
      console.log("Error sending message:", error);
      toast.error(error.response?.data?.message || "Error sending message");
    } finally {
      set({ isSendingMessage: false });
    }
  },


  // To subscribe to get new message from a selected user
  subscribeToMessages: () => {
    const { selectedUser } = get();

    if(!selectedUser) return;

    const socket = useAuthStore.getState().socket;
    
    socket.on("newMessage", (newMessage) => {
      const isMessageFromSelectedUser = get();
      set({ messages: [...get().messages, newMessage] });
    });

  },


  // To unsubscribe from new message from a selected user
  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

  setSelectedUser: (selectedUser) => set({ selectedUser }),

}));