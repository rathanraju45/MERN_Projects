export function Task({ index, task, deleteTask }) {
    return (
        <div className="task">
            <p>{task}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
    );
}