const Notification = ({ status, message }) => {
    if (message === null) {
        return null
    }

    status = "notification " + status

    return (
        <div className={status}>
            {message}
        </div>
    )
}

export default Notification
