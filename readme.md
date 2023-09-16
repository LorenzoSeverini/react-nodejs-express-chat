# Real time chat to share files and messages with your friends

### Description

This is a real time chat to share messages, images and files with your friends. It was built with Express for backend server, React for frontend and Chatengine.io for the chat engine.
The chat engine is provided by [chatengine.io](https://chatengine.io/).
The pretty UI for the chat is from react-chat-engine-pretty. [react-chat-engine-pretty](https://www.npmjs.com/package/react-chat-engine-pretty).

### Technologies

- [Express](https://expressjs.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [React](https://reactjs.org/)
- [Chatengine.io](https://chatengine.io/)
- [React-chat-engine-pretty](https://www.npmjs.com/package/react-chat-engine-pretty)
- [Node.js](https://nodejs.org/en/)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)

### How to use

1. Clone the repository

```bash
git clone
```

2. Backend folder install dependencies

```bash
cd backend
npm install
```

3. Frontend folder install dependencies

```bash
cd frontend
npm install
```

4. Run backend 

```bash
cd backend
create .env file with the chatengine.io project id and private key 
- CHAT_ENGINE_PRIVATE_KEY=your_private_key
- CHAT_ENGINE_PROJECT_ID=your_project_id
npm start
```

5. Run frontend

```bash
cd frontend
create .env file with the chatengine.io project id
- VITE_APP_CHAT_ENGINE_PROJECT_ID=your_project_id
npm run dev
```

6. Open your browser and go to http://localhost:4000

7. Create a user and start chatting