import React from "react";
import { api } from "~/utils/api";
import Todo from "./Todo";

export default function Todos(){
    const { data: todos, isLoading, isError } = api.todo.all.useQuery()
    if (isLoading) return <div>TODOS ARE LOADING...</div>
    if (isError) return <div>Error fetching todos X</div>
    return (
        <>
            {todos.length ? todos.map( todo => {
                return <Todo key={todo.id} todo={todo} />
            }) : "Create a todo..." }
        </>
    )
}