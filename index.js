addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

  // Copy the Request object
  let newRequest = new Request(request);

  // Add Bot Score header
  newRequest.headers.set("CF-Bot-Score", request.cf.botManagement.score)

  // Set conditional response based on Bot Score
  let response = await fetch(newRequest)
  if (request.cf.botManagement.score < 30) {
    return Response.redirect('https://serverless-woo-api.cf-testing.workers.dev/api/resources/2')
  }
  
  // Return to client
  return response
}
