
const http = require("http");
const app = require("./App");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

router.get('/profile', (req, res, next) => {
  let searchQuery = {};

  searchQuery = { "name": { $regex: req.query.name, $options: 'i' } };

  Profile.find(searchQuery, (err, profile) => {
    if (err) {
      res.status(400);
      res.send();
    }

    // Could do a 204 or 404 for no results
    // but the reponse is a success
    // and the filter results are accurate

    res.status(200);
    res.send(profile);
  })
});
