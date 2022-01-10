export const Login = ({setter, handler}) => {
    return(
        <form onSubmit={handler}>
            <input placeholder="username" onChange={(e) => setter(e.target.value)}/>
        </form>
    );
};

// line 1 we can destructure the props object to avoid writing props.setter etc oover and over
// line 4 onsubmit, when press enter or submit the form another way onsubmit is fired. Default is a rerender of the page.