const User = require("./../../app/models/User");
describe("Unit Tests for User class", ()=> {
    test('Create an user object', () => {
        const user = new User(1, "@cuentadeCris", "Cristopher Sandoval", "Nicki Minaj Fan", "dateCreated", "lastUpdated");
        // Resultados que se esperan
        expect(user.id).toBe(1);
        expect(user.username).toBe("@cuentadeCris");
        expect(user.name).toBe("Cristopher Sandoval");
        expect(user.bio).toBe("Nicki Minaj Fan");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdated).toBe("lastUpdated");  
    })
})