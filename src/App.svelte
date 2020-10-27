<script>
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import TextInput from './UI/TextInput.svelte';
  import Button from './UI/Button.svelte';

  let title = '';
  let subtitle = '';
  let address = '';
  let email = '';
  let description = '';
  let imageUrl = '';

  let meetups = [
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
    },
  ];

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title: title,
      subtitle: subtitle,
      description: description,
      imageUrl: imageUrl,
      contactEmail: email,
      address: address,
    };

    meetups = [newMeetup, ...meetups];
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      on:input={(event) => (title = event.target.value)} />

    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={(event) => (subtitle = event.target.value)} />

    <TextInput
      id="address"
      label="Address"
      value={address}
      on:input={(event) => (address = event.target.value)} />

    <TextInput
      id="imageUrl"
      label="ImageUrl"
      value={imageUrl}
      on:input={(event) => (imageUrl = event.target.value)} />

    <TextInput
      id="email"
      label="Email"
      type="email"
      value={email}
      on:input={(event) => (email = event.target.value)} />

    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      value={description}
      on:input={(event) => (description = event.target.value)} />

    <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid {meetups} />
</main>
