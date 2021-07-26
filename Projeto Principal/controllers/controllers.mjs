let people = [
  {
    id: 1,
    first_name: "Rickard",
    last_name: "Caen",
    email: "rcaen0@bing.com",
  },
  {
    id: 2,
    first_name: "Corrina",
    last_name: "Krale",
    email: "ckrale1@unblog.fr",
  },
  {
    id: 3,
    first_name: "Stacee",
    last_name: "Derle",
    email: "sderle2@eventbrite.com",
  },
  {
    id: 4,
    first_name: "Syman",
    last_name: "Denys",
    email: "sdenys3@storify.com",
  },
  {
    id: 5,
    first_name: "Dorri",
    last_name: "Chapell",
    email: "dchapell4@dailymotion.com",
  },
];

//custom find function//
const findMatch = (toFind) => {
  let matched;
  people.map((person) => {
    if (person.id == toFind) {
      matched = person;
    }
  });
  if (matched == undefined) {
    return "This user does not exist in the database";
  } else {
    return matched;
  }
};

const findAndUpdate = (toFind, toUpdate) => {
  let matched;
  const newPeople = people.map((person) => {
    if (person.id == toFind) {
      person = {
        ...person,
        ...toUpdate,
      };
      matched = person;
    }
    return person;
  });
  people = newPeople;
  if (matched == undefined) {
    return "This user does not exist in the database";
  } else {
    return "Success. User updated";
  }
};

const findAndDelete = (toFind) => {
  let msg = "No changes made.";
  let indexToBeRemoved;
  people.filter((person, index, arr) => {
    if (person.id == toFind) {
      indexToBeRemoved = index;
      people.splice(indexToBeRemoved, 1);
      msg = `Database updated with deletion of ID ${toFind}`;
    }
  });
  return msg;
};

//automatically finds the id to be inserted.
const register = (toCreateSingle) => {
  const allRegisteredIds = people.map((person) => {
    return person.id;
  });
  const findAvailable = () => {
    let nextId;
    const length = allRegisteredIds.length;
    for (let i = 1; i <= length + 1; i++) {
      if (allRegisteredIds.includes(i)) {
      } else {
        nextId = i;
      }
    }
    return nextId;
  };

  let nextId = findAvailable();

  findAvailable();
  let newIndex = nextId - 1;
  const newUser = {
    id: nextId,
    ...toCreateSingle,
  };
  if (!newUser.first_name) {
    return "Please, insert First Name.";
  }
  if (!newUser.last_name) {
    return "Please, insert Last Name.";
  }
  if (!newUser.email) {
    return "Please, insert a valid e-mail.";
  }
  people.splice(newIndex, 0, newUser);
  return `User registered with ID ${newUser.id} and placed at index ${newIndex}`;
};
///end of helper functions///

///managing routes///
const listAll = (req, res) => {
  res.send(people);
};
const listSingle = (req, res) => {
  const toFind = req.params.id;
  res.send(findMatch(toFind));
};
const updateSingle = (req, res) => {
  const toFind = req.params.id;
  const toUpdateWith = req.body;
  let didUpdate = findAndUpdate(toFind, toUpdateWith);
  res.send(didUpdate);
};

const deleteSingle = (req, res) => {
  const toFind = req.params.id;
  const didDelete = findAndDelete(toFind);
  console.log(didDelete);
  res.send(didDelete);
};

const createSingle = (req, res) => {
  const toCreateSingle = req.body;
  res.send(register(toCreateSingle));
};

export { listAll, listSingle, createSingle, deleteSingle, updateSingle };
