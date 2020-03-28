let users = {};

mock
  .reduce((t, m) => t.concat(m.issues), [])
  .forEach((item) => {
    item.fields.worklog.worklogs.forEach((w) => {
      users[w.author.name] = (users[w.author.name] || 0) + w.timeSpentSeconds;
    });
  });

Object.entries(users).forEach(([k, v]) => {
  users[k] = {
    timespent: v,
    _timespent: (v / (60 * 60)).toFixed(2)
  };
});
