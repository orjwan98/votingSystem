const app = require("./app");

app.set("PORT", process.env.PORT || 8000);
app.listen(app.get("PORT"), () => {
  console.log("app start running");
});
