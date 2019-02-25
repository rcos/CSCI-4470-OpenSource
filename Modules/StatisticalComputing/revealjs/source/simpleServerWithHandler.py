import SimpleHTTPServer
import SocketServer
import urlparse

PORT = 8000

class MyHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):

  def do_GET(self):

    parsedParameters = urlparse.urlparse(self.path)
    queryParsed = urlparse.parse_qs(parsedParameters.query)

    if ( 'name' in queryParsed ):
      self.processMyRequest(queryParsed)
    else:
      SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self);


  def processMyRequest(self, query):

    self.send_response(200)
    self.send_header('Content-Type', 'text/html')
    self.end_headers()

    nameString = query['name']
    clientAddress = self.client_address[0]

    if nameString[0]:
      self.wfile.write("<!DOCTYPE html>")
      self.wfile.write("<html>")
      self.wfile.write("<body>")
      self.wfile.write("<h1>Welcome " + nameString[0] + "</h1>")
      self.wfile.write("<h2>from " + clientAddress + "</h2>")
      self.wfile.write("</body>")
      self.wfile.write("</html>")
      self.wfile.close()



Handler = MyHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()
