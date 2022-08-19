exports["not-found"] = (request, response) => {
    response.status = 404;
    response.send("Not Found")
}