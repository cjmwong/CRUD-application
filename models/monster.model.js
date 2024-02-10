import mongoose from "mongoose";

const MonsterSchema = new mongoose.Schema(
    {
        "_id": {type: Number, required: true},
        "name": {type: String, required: true},
        "username": {type: String, required: true},
        "email": {type: String, required: true},
        "address": {
            "street": {type: String, required: true},
            "suite": {type: String, required: true},
            "city": {type: String, required: true},
            "zipcode": {type: String, required: true},
            "geo": {
                "lat": {type: String, required: true},
                "lng": {type: String, required: true},
                }
            },
        "phone": {type: String, required: true},
        "website": {type: String, required: true},
        "company": {
            "name": {type: String, required: true},
            "catchPhrase": {type: String, required: true},
            "bs": {type: String, required: true},
            },
        "image_url": {type: String, required: true},
    },
)

const Collection = mongoose.model("Monsters", MonsterSchema)

export default Collection;
