const axios = require('axios');
const fs = require('fs').promises;

async function downloadAndSave(url, filename) {
    try {
        const response = await axios.get(url);
        await fs.writeFile(filename, response.data);
        console.log(`Wrote to ${filename}`);
    } catch (error) {
        console.error(`Error handling ${url}: ${error.message}`);
    }
}

async function processUrls(file) {
    try {
        const urls = await fs.readFile(file, 'utf8');
        const urlList = urls.split('\n').filter(Boolean);

        // Create an array of promises
        const downloadPromises = urlList.map(urlString => {
            const url = new URL(urlString);
            return downloadAndSave(urlString, url.hostname);
        });

        // Wait for all promises to resolve
        await Promise.all(downloadPromises);
    } catch (error) {
        console.error(`Could not process file: ${error.message}`);
    }
}

// Use the filename provided by the user
const filename = process.argv[2];
if (filename) {
    processUrls(filename);
} else {
    console.log('Please provide a file name: node urls.js <filename>');
}
