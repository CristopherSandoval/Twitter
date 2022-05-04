const User = require("./../../app/models/User");
describe("Unit Tests for User class", ()=> {
    test('Create an user object', () => {
        const user = new User(1, "@cuentadeCris", "Cristopher Sandoval", "Nicki Minaj Fan");
        // Resultados que se esperan
        expect(user.id).toBe(1);
        expect(user.username).toBe("@cuentadeCris");
        expect(user.nombre).toBe("Cristopher Sandoval");
        expect(user.bio).toBe("Nicki Minaj Fan");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();  
    })
    test('Prueba getters', () => {
        const usar = new User(1, "Cristopher", "Cristopher Sandoval", "bio");
        expect(usar.getId).toBe(1);
        expect(usar.getUsername).toBe("Cristopher");
        expect(usar.nombre).toBe("Cristopher Sandoval");
        expect(usar.getBio).toBe("bio");
    })
    test('Prueba setters', () => {
        const user3 = new User(1, "Cristopher", "Cris", "Bio");
        user3.setUsername = "Cristopher Sandoval";
        expect(user3.getUsername).toBe("Cristopher Sandoval");

        user3.setBio = "New Bio";
        expect(user3.getBio).toBe("New Bio");
    })
})