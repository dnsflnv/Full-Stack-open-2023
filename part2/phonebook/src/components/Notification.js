const Notification = ({ message }) => {
    if (message.message === null) {
        return null
    }

    return (
        <div className={message.isError ? 'error' : 'succsess'}>
            {message.message}
        </div>
    )
}

export default Notification;