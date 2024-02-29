import fs from "fs"

// File destination.txt will be created or overwritten by default.
fs.copyFile("sqlite.db", "./src/sqlite.db", (err) => {
    if (err) throw err
    console.log("sqlite.db was copied to destination.txt")
})
