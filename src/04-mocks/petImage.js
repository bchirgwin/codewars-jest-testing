const https = require("https");

module.exports = {
    getRandomDog: (response) => {
        https
            .get("https://dog.ceo/api/breeds/image/random", result => {
                const { statusCode } = result;
                const contentType = result.headers["content-type"];

                let error;
                if (statusCode !== 200) {
                        error = new Error("Request failed.\n" + `Status Code: ${statusCode}`);
                } else if (!/^application\/json/.test(contentType)) {
                    error = new Error(
                        "Invalid content-type\n" +
                        `Expected application/json but received ${contentType}`
                    );
                }

                if (error) {
                    // console.error(error.message);
                    result.resume();
                    response(error.message)
                    return;
                }

                result.setEncoding("utf8");
                let rawData = "";
                result.on("data", chunk => (rawData += chunk));
                return result.on("end", () => {
                    try {
                        const parseData = JSON.parse(rawData);
                        // console.log(parseData);
                        response(parseData)
                    } catch (e) {
                        console.error(e.message);
                    }

                });
            })
            .on("error", (e) => {
                console.error(`Got error ${e.message}`);
            });
    }
};
