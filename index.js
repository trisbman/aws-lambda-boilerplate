exports.handler = async (event) => {
    let response = "Hello from AWS!\nEvent: " + JSON.stringify(event, null, 2)
    
    // your code here
    
    return response
};

(async () => {
    let params = {}
    const args = process.argv.slice(2)    
    if (args.length) params = JSON.parse(args)
    console.log(await this.handler(params));
})()
