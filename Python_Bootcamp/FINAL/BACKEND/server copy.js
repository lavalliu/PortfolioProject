const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const bcrypt = require('bcryptjs');
const User = require('./models/users'); 
const Item = require('./models/items'); 
const Resa = require('./models/reservations'); 
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:hackathon123@cluster0.8o9apqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  dbName: 'finalproject'
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
// module.exports = mongoose

// Register CORS plugin
fastify.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

// Register route
fastify.post('/users/register', async (req, reply) => {
  const { username, password, email, phoneno } = req.body;
  try {
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
    username,
    password: hashedPassword,
    email,
    phoneno,
    role: 'client'
    });
    const newUser = await user.save();
    reply.code(201).send({ message: 'User registered', user: newUser });
  } catch (error) {
    if (error.code === 11000) {
      reply.code(400).send({ message: 'User already exists' });
    } else {
      reply.code(500).send({ message: 'Error registering user', error: error.message });
    }
  }
});

// Create Table route
fastify.post('/table/create', async (req, reply) => {
  try {
      const tableRecord = { tables: 50 };
      const result = await mongoose.connection.collection('tables').insertOne(tableRecord);
      return reply.code(200).send({ message: 'Table record inserted successfully', result: result });
  } catch (error) {
      return reply.code(500).send({ message: 'Error inserting table record', error: error.message });
  }
  });

// Create Reservation route
fastify.post('/reservation/create', async (req, reply) => {
  const { guestname, date, time, pax, orders } = req.body;
  try {
    const resa = new Resa({
    guestname,
    date,
    time,
    pax,
    orders
    });
    const newResa = await resa.save();
    reply.code(201).send({ message: 'Reservation created', resa: newResa });
  } catch (error) {
    if (error.code === 11000) {
      reply.code(400).send({ message: 'Reservation for that date and time already exists' });
    } else {
      reply.code(500).send({ message: 'Error creating reservation', error: error.message });
    }
  }
});

//route to get a reservation as per guestname
fastify.get('/reservations/:guestname', async (req, reply) => {
  try {
          const guestName = req.params.guestname;
          const resa = await Resa.findOne({ guestname: guestName }).exec();
      if (resa) {
          reply.send({ success: true, customer: {
            guestname: resa.guestname,
            date: resa.date,
            time: resa.time,
            pax: resa.pax,
            orders: resa.orders
          }
          });
      } else {
          reply.code(404).send({ success: false, message: `Reservation of ${guestName} not found` });
      }
      } catch (err) {
          reply.code(500).send({ success: false, message: err.message });
      }
});

//route to get all reservations as per guestname
fastify.get('/reservations/guest/:guestname', async (req, reply) => {
  const guestName = req.params.guestname;
  try {
    const resa = await Resa.find({ guestname: guestName });
    reply.send({ resa });
} catch (error) {
    reply.code(500).send({ message: `Error fetching reservations for user ${guestname}` });
}
});

// Route to update a reservation
fastify.put('/reservations/updateResa', async (req, reply) => {
  const { guestname, date, time, pax, orders } = req.body;
  try {
        const reservation = await Resa.findOne({ guestname: guestname }).exec();
        if (!reservation) {
            return reply.code(404).send({ message: 'No reservations found for this name' });
        }
        const updatedReservation = await Resa.findOneAndUpdate(
          { guestname: guestname },
          { $set: { date: date, time: time, pax: pax, orders: orders } },
          { new: true } 
        ).exec();
      return reply.code(200).send({ message: 'Reservation updated successfully', guestname: updatedReservation });
      } catch (error) {
          return reply.code(500).send({ message: 'Error updating Reservation', error: error.message });
      }
});  

// Route to get all Reservations
fastify.get('/reservations', async (request, reply) => {
  try {
      const resas = await Resa.find({});
      reply.send({ resas });
    } catch (error) {
      reply.code(500).send({ message: 'Error fetching reservations' });
    }
});

// Create Menu Item route
fastify.post('/items/create', async (req, reply) => {
  const { itemname, group, description, price } = req.body;
  try {
    const item = new Item({
    itemname,
    group,
    description,
    price
    });
    const newItem = await item.save();
    reply.code(201).send({ message: 'Item created', item: newItem });
  } catch (error) {
    if (error.code === 11000) {
      reply.code(400).send({ message: 'Item already exists' });
    } else {
      reply.code(500).send({ message: 'Error creating item', error: error.message });
    }
  }
});

// Route to get a specific item by itemno
fastify.get('/items/:itemno', async (req, reply) => {
  try {
          const itemNo = req.params.itemno;
          const item = await Item.findOne({ itemno: itemNo }).exec();
      if (item) {
          reply.send({ success: true, customer: {
            _id: item._id, 
            itemno: item.itemno,
            itemname: item.itemname,
            group: item.group,
            description: item.description,
            price: item.price
          }
          });
      } else {
          reply.code(404).send({ success: false, message: 'Item not found' });
      }
      } catch (err) {
          reply.code(500).send({ success: false, message: err.message });
      }
  });

// Route to update 1 menu Item
fastify.put('/items/updateItem', async (req, reply) => {
  const { itemno, itemname, group, description, price } = req.body;
  try {
        const item = await Item.findOne({ itemno: itemno }).exec();
        if (!item) {
            return reply.code(404).send({ message: 'Menu Item does not exist' });
        }
        const updatedItem = await Item.findOneAndUpdate(
          { itemno: itemno },
          { $set: { itemname: itemname, group: group, description: description, price: price } },
          { new: true } 
        ).exec();
      return reply.code(200).send({ message: 'Menu Item updated successfully', item: updatedItem });
      } catch (error) {
          return reply.code(500).send({ message: 'Error updating Menu Item', error: error.message });
      }
});  

//Route to update all the items
// Route to update all the items
fastify.put('/items/updateItems', async (req, reply) => {
  const itemsToUpdate = req.body.items; // Expecting an array of items
  try {
  const updatePromises = itemsToUpdate.map(item => {
  const { itemno, itemname, group, description, price } = item;
  return Item.findOneAndUpdate(
  { itemno: itemno },
  { $set: { itemname: itemname, group: group, description: description, price: price } },
  { new: true }
  ).exec(); // Corrected: Added .exec() here
  });
  const updatedItems = await Promise.all(updatePromises);
  // Filter out any null responses (in case some items weren't found)
  const successfulUpdates = updatedItems.filter(item => item !== null);
  if (successfulUpdates.length === itemsToUpdate.length) {
  return reply.code(200).send({ message: 'All menu items updated successfully', items: successfulUpdates });
  } else {
  return reply.code(207).send({ message: 'Some menu items were not updated', items: successfulUpdates });
  }
  } catch (error) {
  return reply.code(500).send({ message: 'Error updating menu items', error: error.message });
  }
  });

// Route to get all Menu Items
fastify.get('/items', async (request, reply) => {
  try {
      const items = await Item.find({});
      reply.send({ items });
    } catch (error) {
      reply.code(500).send({ message: 'Error fetching items' });
    }
});

// Route to get all Menu Items from a specific group
fastify.get('/items/group/:groupName', async (request, reply) => {
  const groupName = request.params.groupName;
  try {
      const items = await Item.find({ group: groupName });
      reply.send({ items });
  } catch (error) {
      reply.code(500).send({ message: `Error fetching items for group ${groupName}` });
  }
});

// Combined route for both adding and modifying menu Items
fastify.route('/items/manage', {
  method: ['POST', 'PUT'],
  handler: async (req, reply) => {
      const items = req.body.items;
      const newItems = items.filter(item => item.isNew);
      const updatedItems = items.filter(item => !item.isNew);

      // Combined Logic to add a new item
      const newItemsPromises = newItems.map(async (item) => {
        // fastify.post(function(req, res) {
        //   fastify.post('/items/create', async (req, reply) => {
            const { itemname, group, description, price } = req.body;
            try {
              const item = new Item({
              itemname,
              group,
              description,
              price
              });
              return await newItem.save();
            } catch (error) {
              if (error.code === 11000) {
                  throw new Error('Item already exists');
              } else {
                  throw error;
              }
            }
      });
      // Combined Logic to update all the items
      const updatedItemsPromises = updatedItems.map(async (item) => {
        // fastify.put('/items/updateItems', async (req, reply) => {
          // const itemsToUpdate = req.body.items; // Expecting an array of items
          // try {
          //     const updatePromises = itemsToUpdate.map(item => {
              const { itemno, itemname, group, description, price } = item;
              return Item.findOneAndUpdate(
                  { itemno: itemno },
                  { $set: { itemname: itemname, group: group, description: description, price: price } },
                  { new: true }
                );
              }).exec();

              try {
                // Wait for all database operations to complete
                const results = await Promise.all([...newItemsPromises, ...updatedItemsPromises]);
                // Filter out any null responses (in case some items weren't found)
                const successfulUpdates = results.filter(result => result !== null);
                if (successfulUpdates.length === items.length) {
                    reply.code(200).send({ message: 'All menu items added and updated successfully', items: successfulUpdates });
                } else {
                    reply.code(207).send({ message: 'Some menu items were not added or updated', items: successfulUpdates });
                }
              } catch (error) {
                reply.code(500).send({ message: 'Error processing items', error: error.message });
              }
  }
});

// Login Route
fastify.post('/users/login', async (req, reply) => {
  const { username, password } = req.body;
  try {
      const user = await User.findOne({ username: username }).exec();
    if (!user) {
      return reply.code(404).send({ message: 'User does not exist' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(password + user.password);
    if (!isMatch) {
      return reply.code(401).send({ message: 'Password is incorrect' });
    }
      return reply.code(200).send({ message: 'Successful login', user: user });
    } catch (error) {
      return reply.code(500).send({ message: 'Error logging in', error: error.message });
    }
});

// Route to update user
fastify.put('/users/updateProfile', async (req, reply) => {
      const { username, password, email, phoneno } = req.body;
      try {
            const user = await User.findOne({ username: username }).exec();
            if (!user) {
                return reply.code(404).send({ message: 'User does not exist' });
            }
            const updatedUser = await User.findOneAndUpdate(
              { username: username },
              { $set: { email: email, phoneno: phoneno } },
              { new: true }
            ).exec();
          return reply.code(200).send({ message: 'Profile updated successfully', user: updatedUser });
          } catch (error) {
              return reply.code(500).send({ message: 'Error updating profile', error: error.message });
          }
});  

// Route to get all users
fastify.get('/users', async (request, reply) => {
  try {
      const users = await User.find({});
      reply.send({ users });
    } catch (error) {
      reply.code(500).send({ message: 'Error fetching users' });
    }
});

// Route to get a specific user by username
fastify.get('/users/:username', async (req, reply) => {
  try {
          const userName = req.params.username;
          const user = await User.findOne({ username: userName }).exec();
      if (user) {
          reply.send({ success: true, customer: {
            _id: user._id, 
            username: user.username,
            email: user.email,
            phoneno: user.phoneno,
            role: user.role
          }
          });
      } else {
          reply.code(404).send({ success: false, message: 'User not found' });
      }
      } catch (err) {
          reply.code(500).send({ success: false, message: err.message });
      }
});

// Listen on port 3000
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
    fastify.log.info(`server listening on ${address}`);
});