# Part2C

Learn about json-server and axios library.

Improve notes app (found in exercises).

Learn about useEffect hook.

And something which I should have learnt earlier, but it has been a while and I
forgot, that components in React can be written in two styles: as a function and
as a class.

useEffect and useState are used when a component is written as a function.

When it is a class, than there are methods like componentDidUpdate(),
componentDidMount() and componentWillUnmount().

class FriendStatusWithCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, isOnline: null };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
        ChatAPI.subscribeToFriendStatus(
            this.props.friend.id,
            this.handleStatusChange
        );
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentWillUnmount() {
        ChatAPI.unsubscribeFromFriendStatus(
            this.props.friend.id,
            this.handleStatusChange
        );
    }

    handleStatusChange(status) {
        this.setState({
            isOnline: status.isOnline
        });
    }
    // ...
}

## .env file

I may need it later when developing other apps. I have noticed that auto-refresh
does not work correctly on my OpenBSD. With this file (.env) it works as it
should. So far so good.
