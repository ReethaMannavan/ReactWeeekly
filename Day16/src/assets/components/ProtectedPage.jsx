function ProtectedPage() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div style={{ padding: '2rem' }}>
      {isLoggedIn ? (
        <h2>Welcome to the Protected Page!</h2>
      ) : (
        <h2 style={{ color: 'red' }}>Access Denied. Please log in to continue.</h2>
      )}
    </div>
  );
}

export default ProtectedPage;