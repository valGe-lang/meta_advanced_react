import { useState, useEffect, useRef } from "react";


export default function App() {
  const [day, setDay] = useState("Monday");

  const prevDay = usePrevious(day);

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
    function usePrevious(val) {
    const ref = useRef();
    useEffect(() => {
        ref.current = val;
    }, [val])
    return ref.current
}


function App() {
    const [count, setCount] = useState(0);
    useConsoleLog(count);

    function increment() {
        setCount(prevCount => prevCount + 10)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Plus 10</button>
        </div>
    )
}

export default App;


function App() {
    const [user, setUser] = React.useState([]);

    const fetchData = () => {
        fetch(`https://randomuser.me/api/?results=1`)
        .then((response) => response.json())
        .then((data) => setUser(data))
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return Object.keys(user).length > 0 ? (
        <div style={{padding: "40px"}}>
            <h1>Customer data</h1>
        <h2>Name:{user.results[0].name.first}</h2>
        <img src={user.results[0].picture.large}/>
        <h2>city:{user.results[0].location.city}</h2>
        <h3>username:{user.results[0].login.username}</h3>
        <h3>registered:{user.results[0].registered.date}</h3>
        </div>
    ) : (
        <h1>Data pending...</h1>
    )
}

    export default App;



export default function App() {
    const [btcData, setbtcData] = useState({});
    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        .then((response) => response.json())
        .then((jsonData) => setbtcData(jsonData.bpi.USD))
        .catch((error) => console.log(error));
    }, [])

    return (
        <>
        <h1>Current BTC/USD data</h1>
        <p>Code: {btcData.code}</p>
        <p>Symbol: {btcData.symbol}</p>
        <p>Rate: {btcData.rate}</p>
        <p>Description: {btcData.description}</p>
        <p>Rate Float: {btcData.rate_float}</p>
        </>
    );
}





export default function App() {
    const[giftCard, setGiftCard] = useState(
        {
            firstName: "Jennifer",
            lastName: "Smith",
            text: "Free dinner for 4 guests",
            valid: true,
            instructions: "To use your coupon, click the button below",
        }
    );


function spendGiftCard() {
    setGiftCard(prevState => {
        return{...prevState, text: "Your coupon has been used", valid: false, instructions: "Please visit our restaurant to renew your gift card."}
    });
    }

return (
    <div style={{padding: '40px'}}>
        <h1>
            Gift Card Page
        </h1>
        <h2>
            Customer: {giftCard.firstName} {giftCard.lastName}
        </h2>
        <h3>
            {giftCard.text}
        </h3>
        <p>
            {giftCard.instructions}
        </p>
        {
            giftCard.valid && (
                <button onClick={spendGiftCard}>
                    Spend Gift Card
                </button>
            )
        }
    </div>
);
    }



export default function App() {
    const [tervehdys, setTervehdys] = useState (
        {
        terve: "Moro",
        paikka: "Maailma",
        }
    );
    console.log(tervehdys, setTervehdys );

    function päivitäTervehdys() {
        setTervehdys(edellinenState => {
            return {...edellinenState, paikka: "Internetti", terve: "Heippa"}
        });
    }

    return (
        <div>
            <h1>{tervehdys.terve}, {tervehdys.paikka}</h1>
            <button onClick={päivitäTervehdys}>Päivitä tervehdys</button>
        </div>
    )
}
