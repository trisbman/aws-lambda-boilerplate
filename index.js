require('dotenv').config()

exports.handler = async (event) => {
    const response = "Hello from AWS!\nEvent: " + JSON.stringify(event)
    return response
};

(async () => {
    // create `.env` file with `IS_DEVELOPMENT=TRUE` to
    // log the function result to the console
    if (!process.env.IS_DEVELOPMENT) return
    let params = {}
    const args = process.argv.slice(2)    
    if (args.length) params = JSON.parse(args)
    console.log(await this.handler(params));
})()
