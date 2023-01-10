function Mailbox(props) {
    const unreadMessages = props.unreadMessages || []
    const count = 0

    return (
        <div className="Mailbox">
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>You have {unreadMessages.length} unread messages.</h2>
            }
            {count && <h2>Messages: {count}</h2>}
        </div>
    )
}

export default Mailbox
