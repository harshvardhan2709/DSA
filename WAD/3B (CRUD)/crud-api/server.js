const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// CRUD Routes

// CREATE
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
app.put('/api/users/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});









// ## 🧪 Goal: Test CRUD APIs (Create, Read, Update, Delete)

// > Your Express server is running at:
// > `http://localhost:5000`

// ---

// ## ✅ Step 1: Open Postman

// * Launch the Postman app on your computer.

// ---

// ## ✅ Step 2: Test **Create API** (POST) — Add a User

// 1. Click `+` to open a new tab.
// 2. Set:

//    * **Method**: `POST`
//    * **URL**: `http://localhost:5000/api/users`
// 3. Click the **"Body"** tab → Choose **raw** → Select **JSON** from dropdown.
// 4. Paste this JSON:

// ```json
// {
//   "name": "Alice",
//   "email": "alice@example.com"
// }
// ```

// 5. Click **Send**.

// ✅ You’ll get a response like:

// ```json
// {
//   "_id": "66370296f8...",
//   "name": "Alice",
//   "email": "alice@example.com",
//   "__v": 0
// }
// ```

// ---

// ## ✅ Step 3: Test **Read API** (GET) — Fetch All Users

// 1. Click `+` to open another tab.
// 2. Set:

//    * **Method**: `GET`
//    * **URL**: `http://localhost:5000/api/users`
// 3. Click **Send**.

// ✅ You’ll see an array of users:

// ```json
// [
//   {
//     "_id": "66370296f8...",
//     "name": "Alice",
//     "email": "alice@example.com"
//   },
//   ...
// ]
// ```

// ---

// ## ✅ Step 4: Test **Update API** (PUT) — Update User

// 1. Copy the `_id` from one of the users.
// 2. Click `+` to open another tab.
// 3. Set:

//    * **Method**: `PUT`
//    * **URL**: `http://localhost:5000/api/users/<paste_id_here>`

//      > Example: `http://localhost:5000/api/users/66370296f8a6bc3d6b8a1234`
// 4. Click **"Body"** → `raw` → `JSON`
// 5. Paste updated data:

// ```json
// {
//   "name": "Alice Updated",
//   "email": "alice.new@example.com"
// }
// ```

// 6. Click **Send**.

// ✅ You’ll get back the updated user.

// ---

// ## ✅ Step 5: Test **Delete API** (DELETE) — Remove User

// 1. Use the same `_id`.
// 2. Click `+` to open another tab.
// 3. Set:

//    * **Method**: `DELETE`
//    * **URL**: `http://localhost:5000/api/users/<paste_id_here>`
// 4. Click **Send**.

// ✅ You’ll get:

// ```json
// { "message": "User deleted" }
// ```

// ---

// ## 🎉 Done!

// You’ve successfully tested all **4 APIs** using Postman.

// Would you like a Postman collection file (JSON) to import and test all APIs in one click?











// Great! Here's a **simple explanation** of the experiment:
// **"Create 4 API endpoints using Node.js, ExpressJS, MongoDB Atlas, Compass, and Postman"**

// ---

// ## 🔬 **Experiment Title**

// CRUD Operations using Node.js, Express.js, MongoDB Atlas, Compass, and Postman

// ---

// ## 🎯 **Objective**

// To build and test 4 API endpoints to perform **Create**, **Read**, **Update**, and **Delete** operations on a MongoDB database using Node.js and Express.

// ---

// ## 🧰 **Tools & Technologies Used**

// * **Node.js** – JavaScript runtime
// * **Express.js** – Web framework for Node.js
// * **MongoDB Atlas** – Cloud database
// * **MongoDB Compass** – GUI to view the database
// * **Postman** – API testing tool

// ---

// ## ⚙️ **Steps Performed**

// ### 1. **Set Up Project**

// * Created a new Node.js project using `npm init`.
// * Installed dependencies:

//   ```bash
//   npm install express mongoose dotenv
//   ```

// ### 2. **Connect to MongoDB Atlas**

// * Created a free cluster on MongoDB Atlas.
// * Added the connection string to `.env` file:

//   ```env
//   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
//   ```

// ### 3. **Create User Model**

// * Defined a simple Mongoose schema with `name` and `email`.

// ### 4. **Build 4 API Routes**

// | Method | Route            | Action        |
// | ------ | ---------------- | ------------- |
// | POST   | `/api/users`     | Create user   |
// | GET    | `/api/users`     | Get all users |
// | PUT    | `/api/users/:id` | Update user   |
// | DELETE | `/api/users/:id` | Delete user   |

// ### 5. **Test with Postman**

// * Used Postman to send requests and check responses:

//   * POST with JSON body to create a user
//   * GET to fetch all users
//   * PUT with user ID and JSON to update
//   * DELETE with user ID to remove

// ### 6. **Verify with MongoDB Compass**

// * Opened Compass, connected to Atlas cluster
// * Viewed the data added or modified through Postman

// ---

// ## ✅ **Output**

// * Successfully performed **CRUD operations**.
// * Verified data in MongoDB Atlas via **Compass**.
// * Confirmed API functionality using **Postman**.

// ---

// ## 📌 **Conclusion**

// This experiment demonstrated how to build and test backend APIs with real-time data storage using **MongoDB Atlas**, and how tools like **Compass** and **Postman** help in development and debugging.

// ---

// Would you like a PDF report or word file of this explanation too?






// sudo apt update
// sudo apt install nodejs npm



// sudo apt update
// sudo apt install snapd
// sudo snap install postman
// postman




// To install **MongoDB Compass** on Ubuntu, follow these steps:

// ---

// ### ✅ **Step-by-Step: Install MongoDB Compass on Ubuntu**

// ---

// ### 🔹 **Method 1: Using .deb package (Recommended)**

// 1. **Go to the official website**
//    👉 [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)

// 2. **Choose options:**

//    * Platform: **Linux**
//    * Package: **.deb (64-bit)**

// 3. **Click "Download"** and save the `.deb` file.

// 4. **Open Terminal and install it:**
//    Go to the folder where it’s downloaded (e.g., `Downloads`) and run:

//    ```bash
//    cd ~/Downloads
//    sudo dpkg -i mongodb-compass_*.deb
//    ```

// 5. **Fix any missing dependencies** (if needed):

//    ```bash
//    sudo apt --fix-broken install
//    ```

// 6. **Launch Compass:**

//    * Search **"Compass"** in the app launcher, or
//    * Run from terminal:

//      ```bash
//      mongodb-compass
//      ```

// ---






// mongodb

// curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
// sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor


// echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] \
// https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/7.0 multiverse" | \
// sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list > /dev/null


// sudo apt update


// sudo apt install -y mongodb-org


// sudo systemctl start mongod


// sudo systemctl enable mongod


// mongod --version


// mongosh
