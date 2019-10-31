const server = require('./api/server.js');

const port = process.env.PORT || 4000
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

server.get('/', (req, res) => {
  res.status(200).json({ message:`It's working!` })
})
