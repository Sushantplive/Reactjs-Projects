import React, { useEffect, useState } from 'react';

/**
 * FetchUserDemo
 * ----------------
 * Small demo component to show how to use `useEffect` to fetch user data when
 * `userId` changes and cancel any in-flight request when `userId` changes
 * or the component unmounts (using AbortController).
 *
 * This is useful for interview/demo purposes (shows proper cleanup and
 * cancellation to avoid race conditions and memory leaks).
 */
export default function FetchUserDemo() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't fetch for invalid ids
    if (!userId) {
      setUser(null);
      setError(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    console.log('controller----->', controller)
    const signal = controller.signal;
    let didCancel = false; // defensive flag to ignore late responses

    setLoading(true);
    setError(null);

    async function fetchUser() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal }
        );

        if (!res.ok) throw new Error(`Request failed: ${res.status}`);

        const data = await res.json();

        if (!didCancel) setUser(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          // Request was aborted, ignore
        } else {
          if (!didCancel) {
            setError(err.message);
            setUser(null);
          }
        }
      } finally {
        if (!didCancel) setLoading(false);
      }
    }

    fetchUser();

    return () => {
      // mark as cancelled and abort the fetch
      didCancel = true;
      controller.abort();
    };
  }, [userId]);

  return (
    <div style={{ padding: 12, border: '1px solid #e6e6e6', borderRadius: 6 }}>
      <h3 style={{ marginTop: 0 }}>Fetch user on userId change ✅</h3>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
        <label htmlFor="userId" style={{ minWidth: 60 }}>User ID</label>
        <input
          id="userId"
          type="number"
          value={userId}
          min={1}
          max={10}
          onChange={(e) => setUserId(Number(e.target.value) || '')}
          style={{ width: 80, padding: 6 }}
        />
        <button onClick={() => setUserId((id) => Math.max(1, id - 1))}>-</button>
        <button onClick={() => setUserId((id) => Math.min(10, id + 1))}>+</button>
      </div>

      {loading && <p>Loading user #{userId}...</p>}
      {error && (
        <p style={{ color: 'crimson' }}>Error: {error}</p>
      )}

      {user && (
        <div style={{ marginTop: 8 }}>
          <strong>{user.name}</strong> <br />
          <em>{user.email}</em> <br />
          <small>{user.website}</small>
        </div>
      )}

      {!loading && !error && !user && <p>No user selected</p>}

      <p style={{ marginTop: 12, color: '#666' }}>
        (This demo uses <code>AbortController</code> to cancel previous fetches when
        <code>userId</code> changes.)
      </p>
    </div>
  );
}
