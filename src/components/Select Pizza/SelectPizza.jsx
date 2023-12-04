


const SelectPizza = () => {

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

    )
}

export default SelectPizza;