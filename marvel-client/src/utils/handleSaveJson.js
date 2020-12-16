const handleSaveJson = (jsonData, filename) => {
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `${filename}.json`;
  link.href = url;
  link.click();
};

export default handleSaveJson;

// for prod server notes
// The application root on Heroku should be /app. So if you have a file named foo.txt in the root of your repo, it would be /app/foo.txt. You can confirm this by opening up a console (e.g. heroku run bash) and running pwd.
