const nameList = ["Carol", "Dylan", "Erica", "Fred", "Georgia", "Henry", "Ilana", "Jake", "Katie", "Leo", "Maria", "Nate", "Olga", "Paul", "Rosa", "Ted", "Uma", "Victor", "Wendy", "Yan", "Zelda"];
const jobList = ["writer", "teacher", "programmer", "designer", "mechanic"];
const priceList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const freelancers = [
    {
        name: "Alice",
        job: "writer",
        price: 30,
    },
    {
        name: "Bob",
        job: "teacher",
        price: 50,
    },
    // {
    //     name: "Carol",
    //     job: "programmer",
    //     price: 70,
    // }
]



const addFreelancerIntervalId = setInterval(addFreelancer, 5000);
render();

function render() {


    const names = document.querySelector("#names");
    const nameElements = freelancers.map((freelancer) => {
        const element = document.createElement("li");
        element.append(`${freelancer.name}, ${freelancer.job}, ${freelancer.price}`);

        return element;
    });
    names.replaceChildren(...nameElements);

    const freelancerPrices = freelancers.map((freelancers) => freelancers.price);
    const totalPrice = freelancerPrices.reduce((acc, num) => {
        acc = acc + num
            return acc;
        }, 0)
        const averagePrice = Math.floor(totalPrice / freelancers.length);
    const average = document.querySelector("#avg");
    average.replaceChildren(averagePrice);

    // const jobElements = freelancers.map((freelancer) => {
    //     const element=document.createElement("li");
    //     element.classList.add(freelancer.job);
    //     return element;
    // });
    // console.log(jobElements);
    // jobs.replaceChildren(...jobElements);

    // const prices = document.querySelector("#prices");
    // const priceElements = freelancers.map((freelancer) => {
    //     const element=document.createElement("li");
    //     element.classList.add(freelancer.price);
    //     return element;
    // });
    // console.log(priceElements);
    // prices.replaceChildren(...priceElements);
};


function addFreelancer() {
    const randomName = nameList[Math.floor(Math.random() * nameList.length)];
    console.log(randomName);
    const randomJob = jobList[Math.floor(Math.random() * jobList.length)];
    console.log(randomJob);
    const randomPrice = priceList[Math.floor(Math.random() * priceList.length)];
    console.log(randomPrice);
    freelancers.push({ name: randomName, job: randomJob, price: randomPrice });
    console.log(freelancers);

    if (freelancers.length >= 10) {
        clearInterval(addFreelancerIntervalId);
    };

    render();
}; 