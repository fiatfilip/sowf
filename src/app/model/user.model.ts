export class User{
    private name:string;
    private id:string;
    private link: string;
    private profileImage: string;
    private reputation: number;
    private reputationChangeDay: number;
    private reputationChangeWeek: number;
    private reputationChangeMonth: number;
    private reputationChangeQuarter: number;
    private reputationChangeYear: number;
    private bronzeBadges: number;
    private silverBadges: number;
    private goldBadges: number;


    constructor(name:string, 
            id:string, 
            link: string, 
            profileImage: string, 
            reputation: number, 
            reputationChangeDay: number, 
            reputationChangeWeek: number, 
            reputationChangeMonth: number, 
            reputationChangeQuarter: number, 
            reputationChangeYear: number, 
            bronzeBadges: number, 
            silverBadges: number, 
            goldBadges: number){
        this.name = name;
        this.id = id;
        this.link = link; 
        this.profileImage = profileImage; 
        this.reputation = reputation; 
        this.reputationChangeDay = reputationChangeDay; 
        this.reputationChangeWeek = reputationChangeWeek; 
        this.reputationChangeMonth = reputationChangeMonth; 
        this.reputationChangeQuarter = reputationChangeQuarter; 
        this.reputationChangeYear = reputationChangeYear; 
        this.bronzeBadges = bronzeBadges; 
        this.silverBadges = silverBadges; 
        this.goldBadges = goldBadges;
    }

    public getName(){
        return this.name;
    }

    public getId(){
        return this.id;
    }
    
    public getLink(){
        return this.link;
    }
    
    public getProfileImage(){
        return this.profileImage;
    }
    
    public getReputation(){
        return this.reputation;
    }
    
    public getReputationChangeDay(){
        return this.reputationChangeDay;
    }
    
    public getReputationChangeWeek(){
        return this.reputationChangeWeek;
    }
    
    public getReputationChangeMonth(){
        return this.reputationChangeMonth;
    }
    
    public getReputationChangeQuarter(){
        return this.reputationChangeQuarter;
    }
    
    public getReputationChangeYear(){
        return this.reputationChangeYear;
    }
    
    public getBronzeBadges(){
        return this.bronzeBadges;
    }
    
    public getSilverBadges(){
        return this.silverBadges;
    }
    
    public getGoldBadges(){
        return this.goldBadges;
    }


}