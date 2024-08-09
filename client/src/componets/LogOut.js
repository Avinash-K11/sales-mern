import { useEffect, useContext } from "react";
import { redirect } from "react-router-dom";
import { UserContext } from "../App.js";

const LogOut = () => {
    const { disatch } = useContext(UserContext);

    useEffect(() => {

        fetch('/api/logout', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res)=> {
                disatch({ type: "USER", payload: false });
                redirect('/login');
                if(res.status !== 200){
                    const error = new Error(res.error);
                    throw error;
                }
            }).catch((err) => {
                console.log(err);
            })
    });

    return (
        <>
            <h1>Log out page</h1>
        </>
    );
};

export default LogOut;