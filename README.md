# Capstone-Project-Develop-a-YouTube-Clone-Using-the-MERN-Stack

# 🎬 YouTube Clone – Full Stack Project

A full-featured YouTube Clone built with the **MERN Stack** – MongoDB, Express.js, React, and Node.js.    
Media (videos, thumbnails, profile pictures) is managed using **Cloudinary**.

## 🎥 Demo Video

https://drive.google.com/file/d/1b8CfGZPSlkth1afpZ78JfnxzZumZrA7c/view?usp=drive_link


## ✨ Features

- 🔐 **Authentication:** Register/Login with JWT
- 🎦 **Video Uploading and Streaming**
- 👤 **Channel Management** (Create/Edit/Delete)
- 💬 **Comment System** (Add/Edit/Delete)
- 👍 **Like/Dislike Functionality**
- 🔎 **Video Search and Filter**
- 📱 **Responsive Design**
- 📂 **My Channel Dashboard**
- 🔁 **Subscriptions**

---



</details>

---

## 🚀 Getting Started

### 🖥️ Backend Setup

```bash
# Clone repo & navigate
git clone https://github.com/Omkar0210/Capstone-Project-Develop-a-YouTube-Clone-Using-the-MERN-Stack.git
cd youtube-clone-test

cd backend

# Install dependencies
npm install

# Configure .env file
PORT = 5000

# MONGO_URI = mongodb://localhost:27017/youd
MONGO_URI =mongodb+srv://omkar01:Omkar8767@cluster0.dcvippx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET = omkarkey

CLOUDINARY_CLOUD_NAME = dfiizqv1d
CLOUDINARY_API_KEY = 721547742153626
CLOUDINARY_API_SECRET = 5nlTv6f_840OczrcxQ0ORf2ofIk

# Start server
npm run start
# Runs on http://localhost:5000
```

### 💻 Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Start development server
npm run dev
# Runs on http://localhost:5173
```

---

## 🔌 API Routes

### 🔐 Auth Routes – `/api/auth`

| Method | Endpoint  | Description                                     |
| ------ | --------- | ----------------------------------------------- |
| POST   | /register | Register a new user (with profile image upload) |
| POST   | /login    | Login a user                                    |
| GET    | /me       | Get logged-in user info (protected)             |

### 📺 Video Routes – `/api/videos`

| Method | Endpoint     | Description                                 |
| ------ | ------------ | ------------------------------------------- |
| GET    | /search      | Search videos                               |
| GET    | /            | Get all videos                              |
| GET    | /user        | Get videos uploaded by logged-in user       |
| GET    | /:id         | Get a single video by ID                    |
| POST   | /upload      | Upload a new video (with thumbnail + video) |
| PUT    | /:id         | Update a video (protected, with new files)  |
| DELETE | /:id         | Delete a video (protected)                  |
| POST   | /:id/like    | Like or unlike a video                      |
| POST   | /:id/dislike | Dislike or remove dislike                   |
| PATCH  | /:id/views   | Increase view count                         |

### 💬 Comment Routes – `/api/videos/:videoId/comments`

| Method | Endpoint                                 | Description                  |
| ------ | ---------------------------------------- | ---------------------------- |
| POST   | /api/videos/:videoId/comments            | Add a comment (protected)    |
| GET    | /api/videos/:videoId/comments            | Get comments on a video      |
| PUT    | /api/videos/:videoId/comments/:commentId | Edit a comment (protected)   |
| DELETE | /api/videos/:videoId/comments/:commentId | Delete a comment (protected) |

✅ Comments are nested under videos, using `mergeParams: true`.

### 📡 Channel Routes – `/api/channels`

| Method | Endpoint       | Description                       |
| ------ | -------------- | --------------------------------- |
| POST   | /              | Create a channel (with banner)    |
| GET    | /:id           | Get a channel by ID               |
| PUT    | /:id           | Update channel info (with banner) |
| DELETE | /:id           | Delete a channel                  |
| POST   | /:id/subscribe | Toggle subscription to a channel  |

---

## 🛠 Scripts

### Backend

| Script        | Description               |
| ------------- | ------------------------- |
| npm run start | Start server with Nodemon |

### Frontend

| Script        | Description                   |
| ------------- | ----------------------------- |
| npm run dev   | Start Vite dev server         |
| npm run build | Build frontend for production |

---

## 📦 Notable Packages

### Backend

express, mongoose, jsonwebtoken, bcrypt, cloudinary, multer, streamifier, dotenv, cors, nanoid, express-async-handler

### Frontend

react, redux-toolkit, axios, react-router-dom, tailwindcss, vite, react-icons, react-hot-toast

---

## 🙋‍♂️ Author

**Gunjal Omkar**  
GitHub: "https://github.com/Omkar0210/Capstone-Project-Develop-a-YouTube-Clone-Using-the-MERN-Stack.git",
linkedin : "https://www.linkedin.com/in/omkar-gunjal-8b4b46252/"
