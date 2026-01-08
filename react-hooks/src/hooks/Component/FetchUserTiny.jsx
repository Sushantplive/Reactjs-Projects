import { useEffect, useState } from 'react';

// default userId = 1 and allow changing it inside the component for quick demos
function FetchUserTiny({ userId = 1 }) {
  const [currentId, setCurrentId] = useState(userId);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!currentId) {
      setUser(null);
      return;
    }

    const controller = new AbortController();
    console.log(controller.signal)

    async function fetchData () {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${currentId}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
        setUser(null);
      }
    };

    fetchData();

    return () =>{
      console.log('run this')
      controller.abort() //// cancel when id changes or component unmounts
    } ;
  }, [currentId]);

  return (
    <div>
      <label style={{ display: 'block', marginBottom: 8 }}>
        User ID:{' '}
        <input
          type="number"
          value={currentId}
          min={1}
          max={10}
          onChange={(e) => setCurrentId(Number(e.target.value) || 1)}
          style={{ width: 64 }}
        />
      </label>

      <div>{user ? user.name : 'No user'}</div>
    </div>
  );
}

export default FetchUserTiny;