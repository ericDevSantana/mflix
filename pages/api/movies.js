import { connectToDatabase } from "../../util/mongodb"

export default async (req, res) => {
    const { db } = await connectToDatabase();

    const movie = await db
        .collection("movies")
        .find({})
        .limit(20)
        .toArray();
    
    res.json(movie);
    
    // let newFood = { name: "Cake", calories: 250 };

    // db.collection("food").insertOne(newFood, function (err, res) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("Added Successfully");
    //     }
    // });

    // const foods = await db
    //     .collection("food")
    //     .find({})
    //     .limit(20)
    //     .toArray();
    
    // res.json(foods);
}