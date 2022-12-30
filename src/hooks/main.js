import { faker } from '@faker-js/faker'

export const retrieveUser = () => {
  const post = {
    like: faker.datatype.number(),
    number: faker.datatype.number({ min: 100, max: 1000 }),
    comment_number: faker.datatype.number({ min: 10, max: 150 }),
    images: faker.image.nature(),
    pubblication: faker.date.past(2),
    city: faker.address.city(),
  }
  const user = {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    image: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    show_simil_profile: true,
    bio: faker.lorem.sentences(),
    telephone_number: faker.phone.number(),
    web_site: faker.internet.url(),
    creation_date: faker.date.past(2),
    posts: faker.helpers.arrayElement([post]),
  }
  console.log('user', user)
  return { data: user }
}

export const retrieveProfiles = () => {
  let profiles = []

  for (let id = 1; id <= 20; id++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let email = faker.internet.email()
    let avatar = faker.image.avatar()
    let birthday = faker.date.birthdate()
    let createdAt = faker.date.past(2)
    let description = faker.lorem.sentences()
    // let posts = faker.helpers.uniqueArray(post)
    // let followers = faker.helpers.uniqueArray(faker.random.numeric, 100)
    // let followed = faker.helpers.uniqueArray(faker.random.numeric, 15)
    // let stories = faker.helpers.uniqueArray(faker.random.word, 3)

    const post = {
      like: faker.datatype.number(),
      number: faker.datatype.number({ min: 100, max: 1000 }),
      comment_number: faker.datatype.number({ min: 10, max: 150 }),
      images: faker.image.nature(),
      pubblication: faker.date.past(2),
      city: faker.address.city(),
    }

    profiles.push({
      id: id,
      name: firstName,
      lastname: lastName,
      email: email,
      image: avatar,
      images: faker.helpers.arrayElement([post.images]),
      birthday: birthday,
      bio: description,
      creation_date: createdAt,
      posts: post,
      city: post.city,
      number: post.number,
      comment_number: post.comment_number,
      pubblication: post.pubblication,

      //   followers: followers,
      //   followed: followed,
      //   stories: stories,
    })
  }
  console.log('profiles', profiles)
  return { data: profiles }
}
