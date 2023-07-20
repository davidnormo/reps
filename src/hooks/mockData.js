const today = new Date();

export default ({ categoryBgColors, randomInt }) => ({
  categories: [
    {
      id: "1",
      name: "Workout",
      bgColor: categoryBgColors[randomInt(categoryBgColors.length)],
    },
    {
      id: "2",
      name: "Music",
      bgColor: categoryBgColors[randomInt(categoryBgColors.length)],
    },
    {
      id: "3",
      name: "Bible Study",
      bgColor: categoryBgColors[randomInt(categoryBgColors.length)],
    },
    {
      id: "4",
      name: "Home",
      bgColor: categoryBgColors[randomInt(categoryBgColors.length)],
    },
  ],
  exercises: [
    {
      id: "1",
      name: "Dead Hang",
      timed: true,
      sets: true,
      category: "1",
      unit: "none",
    },
    {
      id: "2",
      name: "Scales",
      timed: true,
      sets: true,
      category: "2",
      unit: "none",
    },
    {
      id: "3",
      name: "Prayer",
      timed: true,
      sets: true,
      category: "3",
      unit: "none",
    },
    {
      id: "4",
      name: "Tidy Up",
      timed: true,
      sets: true,
      category: "4",
      unit: "none",
    },
  ],
  reps: [
    {
      exerciseId: "1",
      details: {
        startTime: new Date().setDate(today.getDate() - 3),
        ellapsedTime: 4000,
      },
    },
    {
      exerciseId: "1",
      details: {
        startTime: new Date().setDate(today.getDate() - 3),
        ellapsedTime: 4000,
      },
    },
    {
      exerciseId: "2",
      details: {
        startTime: new Date().setDate(today.getDate() - 3),
        ellapsedTime: 4000,
      },
    },
    {
      exerciseId: "1",
      details: {
        startTime: new Date().setDate(today.getDate() - 2),
        ellapsedTime: 4000,
      },
    },
    {
      exerciseId: "1",
      details: {
        startTime: new Date().setDate(today.getDate() - 2),
        ellapsedTime: 4000,
      },
    },
    {
      exerciseId: "2",
      details: {
        startTime: new Date().setDate(today.getDate() - 2),
        ellapsedTime: 4000,
      },
    },
    {
      exerciseId: "3",
      details: {
        startTime: new Date().setDate(today.getDate() - 2),
        ellapsedTime: 4000,
      },
    },
    {
      exerciseId: "3",
      details: {
        startTime: new Date().setDate(today.getDate() - 1),
        ellapsedTime: 4000,
      },
    },
    {
      exerciseId: "1",
      details: {
        startTime: new Date(),
        ellapsedTime: 4000,
      },
    },
  ],
  state: {},
});
