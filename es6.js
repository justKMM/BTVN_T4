function student(name, age, address)
{
    this.name = name;
    this.age = age;
    this.address = address;
};

const students=[
    {name:"Khoi", age: 17, address:"17 Cau Giay"},
    {name: "Khoa", age: 15, address:"20 Hai Ba Trung"}
];
    const setjson=JSON.stringify(obj);
    localStorage.setItem(‘’, setjson);

    const obj=JSON.parse(localStorage.getItem(‘key’));


    const smartPhones = [
        { name: 'iPhone', price: 649 },
        { name: 'Galaxy S6', price: 576 },
        { name: 'Galaxy Note 5', price: 489 }
        ];

    const returnPrice = (smartPhone) => {
        let price = [];
        for(smartPhone of smartPhones) {
            price.push(smartPhone.price);
        }
        return price;
    };

    console.log(returnPrice());

    const foo = (x,y,z) => 
        console.log( x, y, z );

    const foo = () => {
        alert("Hello");
    };

    const foo = (a,b) => {
        let m = a+b*100;
        return m;
    };
    