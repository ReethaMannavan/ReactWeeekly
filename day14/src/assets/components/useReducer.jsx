import { useReducer } from "react";

const formReducer = (state, action) => {
    return { ...state, [action.name]: action.value };
}

const ComplexForm = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        username: "",
        password: ""
    });
    return (
        <form>
            <input type="text" name="username" value={formState.username}
                onChange={(e) => dispatch(e.target)} placeholder="Username" />
            <input type="password" name="password" value={formState.password}
                onChange={(e) => dispatch(e.target)} placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ComplexForm;