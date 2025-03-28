export function Task({task, index, deleteTask}) {
    return (
        <div className="task">
            <p>{props.task}</p>
            <button onClick={() => props.delete(props.index)}>Delete</button>
        </div>
    );
}