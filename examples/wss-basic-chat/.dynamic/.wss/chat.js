////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Basic WebSocket Chat.
//
// Note: in order to have access to `this`, you must define your route using the function keyword.
// ===== You cannot use an arrow function. You can, however, use arrow functions within any inner
//       functions inside of your route (like the event handler in this example).
//
////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = function (client, request) {
  //
  // A new client connection has been made.
  //
  // Persist the client’s room based on the path in the request.
  //
  client.room = this.setRoom(request)

  console.log(`New client connected to ${client.room}`)

  client.on('message', message => {
    //
    // A new message has been received from a client.
    //
    // Broadcast it to every other client in the same room.
    //
    const numberOfRecipients = this.broadcast(client, message)

    console.log(`${client.room} message broadcast to ${numberOfRecipients} recipient${numberOfRecipients === 1 ? '' : 's'}.`)
  })
}
