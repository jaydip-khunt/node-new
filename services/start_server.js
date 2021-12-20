app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`API is running on port ${port}`);
});
// server = http.createServer(app);