import { useState,useEffect } from "react";




const CryptoTracker=()=> {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,cardano,dogecoin"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setCryptoData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  return (
    <div className="crypto-container">
      <h1 className="crypto-title">10.Crypto Price Tracker</h1>
      {loading && <p className="loading-text">Loading prices...</p>}
      {error && <p className="error-text">{error}</p>}

      <ul className="crypto-list">
        {cryptoData.map((coin) => (
          <li key={coin.id} className="crypto-item">
            <img src={coin.image} alt={coin.name} className="crypto-logo" />
            <div className="crypto-info">
              <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
              <p>Price: ${coin.current_price.toLocaleString()}</p>
              <p
                className={
                  coin.price_change_percentage_24h >= 0 ? "green" : "red"
                }
              >
                24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CryptoTracker;
