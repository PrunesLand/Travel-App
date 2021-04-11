export default class DataManager  {
    static myInstance = null;
    userID = "";

    travel = [
        {
            id: 1,
            travelId:1,
            title:"Surfing",
            date:'',
            location:'',
            description:"Read on 3rd of March, 2000",
            category:"activity",
        },
        {
            id:1,
            travelId:2,
            title:"Opera house",
            date:'',
            location:'',
            description:"Read on 13th of May, 2014",
            category:"visit",
        },
        {
            id: 2,
            travelId:1,
            title:"Sushi",
            date:'',
            location:'',
            description:"Read on 3rd of March, 2000",
            category:"food",
        }
    ]

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance =  new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID = id;
    }

    getTravel(id){
        return this.travel.filter((tavel)=> travel.id === id);
    }

    addTravel(travel){
        this.travel.push(travel);
    }

}