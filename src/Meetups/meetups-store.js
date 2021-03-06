import { writable } from 'svelte/store';

const meetups = writable([
  {
    id: 'm1',
    title: 'Coding Bootcamp',
    subtitle: 'Learn to code in 2 hours',
    description:
      'In this meetup, we will have some experts that teach you how to code.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/65/Baby.tux-800x800.png',
    address: '27th Nerd Road, 32423 New York',
    contactEmail: 'code@test.com',
    isFavorite: false,
  },
  {
    id: 'm2',
    title: 'Swim Together',
    subtitle: 'Lets go for some swimming',
    description: 'We will swim some laps.',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/551b7247e4b04e2cba1e41ce/1527818395733-WHRPPNMWOHVJ7QLBH8RZ/ke17ZwdGBToddI8pDm48kM27ZZI47ic5XRBZeHEXLbx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0pTKqSDRwmMK43IUI3HojJVzs4UH6zJyplqGEef6zS_HQ5jKL-0x7Oc_ciLAaGkE5A/babydrop.jpg?format=2500w',
    address: '27th Nerd Road, 32423 New York',
    contactEmail: 'code@test.com',
    isFavorite: false,
  },
]);

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false
    };
    meetups.update(items => {
      return [newMeetup, ...items];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update(items => {
      const meetupIndex = items.findIndex(i => i.id === id);
      const updatedMeetup = {...items[meetupIndex], ...meetupData};
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      // console.log(updatedMeetups, id);
      return updatedMeetups;
    });
  },
  removeMeetup: (id) => {
    meetups.update(items => {
      return items.filter(i => i.id !== id);
    });
  },
  toggleFavorite: (id) => {
    meetups.update(items => {
      const updatedMeetup = { ...items.find((m) => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex((m) => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  }
};

export default customMeetupsStore;