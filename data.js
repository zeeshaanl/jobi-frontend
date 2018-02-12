var faker = require('faker');

module.exports = () => {
    const data = {
        users: [],
        jobs: [],

    }
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
            jobType: faker.name.jobArea(),
            bookmarked: faker.random.boolean(),
            company: faker.company.companyName(),
            description: faker.lorem.paragraphs(5),
            location: faker.address.country(),
            timePosted: faker.date.recent(),
            url: faker.internet.url(),
        })
    }
    return data
}
