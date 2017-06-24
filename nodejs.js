var http=require("http")
function request_handler(req,res)
{
var body_text="hello from sruthi";
res.end(body_text);
}
var svr=http.createServer(request_handler);
svr.listen(8081);
