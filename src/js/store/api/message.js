import message from './message.json'

export default {
  getMessage (user, callback, failure) {
    callback(message)
  }
}
