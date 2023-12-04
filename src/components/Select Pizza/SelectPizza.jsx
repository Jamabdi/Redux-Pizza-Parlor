


const SelectPizza = () => {

    const textPlacement = {
        marginTop:'60px',
      };

const [pizzaList, setPizzaList] = useState([]);

const getPizzaList = () => {
    axios.get('/api/pizza').then((response) => {
        console.log(response.data);
        setPizzaList(response.data)
    }).catch((error) => {
        console.log('GET /pizza error', error);
        alert('Something went wrong fetching pizzas');
    })
}

useEffect(() => {
    getPizzaList();
}, [])


    return (
        <>
        <h3 style = {textPlacement}>Order from any of our Pizza's below!</h3>
       <PizzaItem/>
       </>
    )
}

export default SelectPizza;