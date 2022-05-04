const UserService = require('./../../app/services/UserService');
describe("Unite test for User services class : ", () => {
    test('Create a new user using UserServices', () => {
        const usersservices = UserService.create(1, "cuentacris", "Cristopher");
        expect(usersservices.id).toBe(1);
        expect(usersservices.username).toBe("cuentacris");
        expect(usersservices.nombre).toBe("Cristopher");
        expect(usersservices.bio).not.toBeUndefined();
    })
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, "cuentaCris", "Cristopher");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("cuentaCris");
        expect(userInfoInList[2]).toBe("Cristopher");
        expect(userInfoInList[3]).toBe("sin bio");
    })
    test("3. Update username", ()=> {
        const user = UserService.create(1, "Cristopher", "Cris");
        UserService.updateUserUsername(user, "elcris");
        expect(user.username).toBe("elcris");
    })
})