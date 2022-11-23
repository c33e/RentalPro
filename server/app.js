require("dotenv").config({ path: "./config.env" })
require("./config/database").connect();
const express = require("express");

const app = express();

app.use(express.json());

// Logic goes here
// importing user context
const User = require("./model/user");

export default function Auth({ setToken }) {
  let [authMode, setAuthMode] = useState("signin")

const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

const [email, setEmail] = useState();
const [password, setPassword] = useState();

const handleSubmit = async e => {
  e.preventDefault();
  const token = await loginUser({
    email,
    password
  });
  setToken(token);
}

// Register
app.post("/register", async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input
    //const { email, password } = req.body;
    if (authMode === "signin") {
    
      return (
        <div className="Authformcontainer">
          <form className="Authform" onSubmit={handleSubmit}>
            <div className="formcontent">
              <h3 className="formtitle">Sign In</h3>
              <div className="text-center">
                Not a registered user yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )
    }

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// Login
app.post("/login", async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    //const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here

  const auth = require("./middleware/auth");

  app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
  });

});
}

module.exports = app;
