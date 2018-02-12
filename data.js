var faker = require('faker');

module.exports = () => {
    const data = {
        users: [],
        jobs: [],

    }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
        data.users.push({
            id: i,
            username: faker.internet.userName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
        })
        data.jobs.push({
            id: i,
            title: faker.name.jobTitle(),
            bookmarked: faker.random.boolean(),
            company: faker.company.companyName(),
            description: faker.lorem.paragraphs(5),
            location: faker.name.jobArea(),
            timePosted: faker.date.recent(),
            url: faker.internet.url(),
        })
    }
    return data
}
