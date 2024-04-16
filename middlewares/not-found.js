// when route not found!
const notFound = (req, res) => {
  res
    .status(404)
    .send("<h1 class='not-found'> 404 - This Route doesnt exists! </h1>");
};

module.exports = notFound;
