import { useEffect, useState } from "react";

const AbortControllerDemo = () => {
    // setup value for input text
    const [userId, setUserId] = useState(0);
    const [user, setUser] = useState('')
    // i want to fetch data base on userId


    useEffect(() => {

        if (!userId || userId < 1){
            setUser('');
            return
        } // guard applied
        // now I want to call api with dynamic userId that to asyanc await way
        const controller = new AbortController();
        
        async function fetchData() {
            // as asyn we cant controll the error or catch so use try catch
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,
                    { signal: controller.signal });
                    if (!res.ok) throw new Error('Network response was not ok');
                const data = await res.json();
                console.log(data)
                setUser(data.name)
            } catch (err) {
                console.log('error');
                if (err.name !== 'AbortError') console.error(err);
                setUser('')
            }

        }
        fetchData();
        console.log('userId changed', userId)
        return () => {
            console.log('run this if userId change or component unmounted')
            controller.abort()
        }
    }, [userId])

    const handleUserId = (e) => {
        setUserId(e.target.value)
    }


    return (
        <div>
            <input className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                placeholder="Search" type="number" value={userId} onChange={handleUserId} />
            {`UserId is ${userId} and User Name is ${user}`}
        </div>
    )
}

export default AbortControllerDemo;