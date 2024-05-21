import revalidate from "../../../lib/actions/action1";

export default async function Todoss() {
    const response = await fetch('https://sum-server.100xdevs.com/todos', { next: { tags: ['todos'] } })
    //adding a todos tag to this request and calling the server action revalidate to get the updated todos from the backend and clearning the cache(revalidating the cache)

    const data = await response.json();
    console.log('backend request catched');
    console.log(JSON.stringify(data));
    revalidate()
    return (
      <div>
        {data.todos.map((todo: any) => (
          <div key={todo.id}>
            {todo.title}
            {todo.description}
          </div>
        ))}
      </div>
    );
  }
