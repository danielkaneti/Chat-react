export const SEND = 'SEND';

export const sendMessageAction = (sender, receiver, msg) => {
    console.log(sender, receiver, msg);
    return {
        type: SEND,
        message: {
            sender,
            receiver,
            msg,
            time: Date.now(),
        }
    }
}