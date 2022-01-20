//1.Solving problems using array functions on rest countries data.
//a.Get all the countries from Asia continent /region using Filter function

    const getCountries = () =>{
    const xhr = new XMLHttpRequest();
    xhr.open ("GET" , "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () =>{
      const countries = xhr.response;
      const countryNames =countries.map ((country) => country.name.commom);
      const asiaRegion = countries.filter((country) => country.region ==="Asia");
        console.log("asiaRegion" , asiaRegion);
    }
}
getCountries();

//b.Get all the countries with a population of less than 2 lakhs using Filter function

const Countries = () =>{
    const xhr = new XMLHttpRequest;
    xhr.open ("GET", "https://restcountries.com/v3.1/all" );
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () =>{
        const countries = xhr.response;
        const countryNames = countries.map ((country) => country.name.commom);
        const population = countries.filter((country) =>country.population < "2 lakhs");
        console.log("population", population);
    }
}
Countries();

//c.Print the following details name, capital, flag using forEach function

const country = () =>{
    const xhr = new XMLHttpRequest;
    xhr.open ("GET", "https://restcountries.com/v3.1/all" );
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () =>{
        const countries = xhr.response;
        let name =  countries.forEach(country => { console.log("countryName:",  country.name, ",", "capital:",  country.capital, ",", "flag:",  country.flag);
            
        });
    }
}
        country(); 

//d.Print the total population of countries using reduce function

const population = () => {
    const xhr = new XMLHttpRequest;
    xhr.open("GET" , "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const countries = xhr.response;
        const countryNames = countries.map ((country) => country.name.commom);
        const totalPopulation = countries.reduce ( (total,country) => {return total+ country.population} ,0);
        console.log("totalPopulation" , totalPopulation);
    }
}

population();

//e.Print the country which uses US Dollars as currency.

const dollars = () => {
    const xhr = new XMLHttpRequest;
    xhr.open( "GET" ,"https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const countries = xhr.response
        const countryNames = countries.map ((country) => country.name.commom);
        const usDollars = countries.filter ((country) =>country.dollars === "USD");
        console.log("usDollars" ,usDollars);
    //     const UsdCurrency =Countries.filter((Country) => Country.currency ==="USD");
    // for (let key in UsdCurrency)
    // console.log(UsdCurrency[key].name);
    }
}

dollars();