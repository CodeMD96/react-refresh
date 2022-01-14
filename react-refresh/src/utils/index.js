export const signUpFetch = async (username, email, password, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            })
        });
        const data = await response.json();
        localStorage.setItem("myToken", data.token);
        setUser(data.user.username);
    } catch (error) {
        console.log(error);
    }
};

export const logInFetch = async (username, password, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json();
        setUser(data.user.username);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
}

export const tokenCheck = async (setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("myToken")}`}
        })
        const data = await response.json();
        return setUser(data.user.username);
    } catch (error) {
        console.log(error);
    }
}

export const updateFetch = async (username, email) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                email
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const cancelFetch = async (username, password, setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json();
        console.log(data);
        if (data.user.deletedCount ===1) {
            localStorage.removeItem("myToken");
            setUser(null)
        } else {
            return data;
        };
    } catch (error) {
        console.log(error);
    }
}

// react env variable must be named with REACT_APP_ at the start