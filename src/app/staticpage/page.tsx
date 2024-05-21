export default async function Staticpage() {
    const response = await fetch("https://sum-server.100xdevs.com/todos",{
        next:{
            revalidate:10
        }
    });

    //if there is a difference of 10 seconds between 2 requests, the 2nd request will refetch the response. This is how we can invalidate the cache by this

    const data = await response.json();
    console.log('backend request catched');
    console.log(JSON.stringify(data));
  
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
  //we see the logs at the build time hence the page is statically generated


  //the common usecase of SSG (Static Site Generation) is blogging website