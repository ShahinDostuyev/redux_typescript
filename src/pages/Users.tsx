import React from "react";
import { useState, useEffect } from "react";
import { IUser } from "../models/IUser";
import axios from "axios";
import { USERS_API } from "../constants/api";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getUsers } from "../slices/UserSlice";
// import ProductDetail from "./ProductDetail";
function Users() {
  const [users, setusers] = useState<IUser[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { data, error, loading } = useAppSelector((state) => state);

  return (
    <>
    {
      error&&<h1>Error: {error}</h1>
    }
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Street</th>
              <th>City</th>
              <th>Company name</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address?.street}</td>
                  <td>{user.address?.city}</td>
                  <td>{user.company?.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Users;
