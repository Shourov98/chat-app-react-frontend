# Chat App - Modern Real-time Chat Application

A modern, real-time chat application built with React and Vite, featuring user authentication, real-time messaging, and a clean, responsive UI.

## Features

- User Authentication (Login/Signup)
- Real-time messaging
- User profiles with avatars
- Online status indicators
- Settings page for user preferences
- Dark/Light theme support
- Responsive design for all devices
- Message loading states with skeletons
- Error handling and user feedback

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **State Management**: Zustand
- **UI Components**: Lucide React Icons
- **Toast Notifications**: React Hot Toast
- **Axios**: HTTP Client
- **CSS Framework**: DaisyUI (Tailwind CSS)
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── ChatContainer.jsx   # Main chat interface
│   ├── ChatHeader.jsx      # Chat header component
│   ├── MessageInput.jsx    # Message input component
│   ├── Navbar.jsx          # Navigation bar
│   ├── Sidebar.jsx         # User list sidebar
│   └── skeletons/          # Loading skeleton components
├── pages/                  # Page components
│   ├── HomePage.jsx        # Main chat page
│   ├── LoginPage.jsx       # User login page
│   ├── ProfilePage.jsx     # User profile page
│   ├── SettingsPage.jsx    # User settings page
│   └── SignUpPage.jsx      # User signup page
├── store/                  # State management
│   ├── useAuthStore.js     # Authentication state
│   ├── useChatStore.js     # Chat-related state
│   └── useThemeStore.js    # Theme state
├── lib/                    # Utility functions
│   ├── axios.js           # API client configuration
│   └── utils.js           # Helper functions
└── constants/             # Application constants
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shourov98/chat-app-react-frontend.git
```

2. Install dependencies:
```bash
cd chat-app-react-frontend
npm install
```

3. Copy `.env.example` to `.env` and configure your environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=your-api-url
VITE_WS_URL=your-websocket-url
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React and Vite for the amazing development experience
- DaisyUI for beautiful UI components
- Zustand for lightweight state management
- All contributors who helped shape this project
