using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Services;
using MongoDB.Bson;
using MongoDB.Driver;

namespace FitnessAndWorkoutSystem.Repositories
{
    public class UserRepository: IUserRepository
    {

        private readonly IMongoCollection<User> _usersCollection;

        public UserRepository(MongoDbClientService mongoClient)
        {
            _usersCollection = mongoClient.database.GetCollection<User>("users");
        }

        // Database operations

        // Add a user
        public async Task Add(User user)
        {
            //user.Id = ObjectId.GenerateNewId();
            //user.UserId = Guid.NewGuid().ToString();
            await _usersCollection.InsertOneAsync(user);
            return;
        }

        // Get all users
        public async Task<List<User>> GetAll()
        {
            var users = await _usersCollection.Find(_ => true).ToListAsync();
            return users;
        }

        // Get user by email
        public async Task<User?> GetByEmail(string email)
        {
            var user = await _usersCollection.Find(u => u.Email == email).FirstOrDefaultAsync();

            return user;
        }

        // Get user by id
        public async Task<User?> GetById(string userId)
        {
            var user = await _usersCollection.Find(u => u.UserId == userId).FirstOrDefaultAsync();

            return user;
        }

        // Get users by role
        public async Task<List<User>> GetByRole(string role)
        {
            var users = await _usersCollection.Find(u => u.Role.Equals(role, StringComparison.OrdinalIgnoreCase)).ToListAsync();

            return users;
        }

        // Get users by trainer
        public async Task<List<User>> GetByTrainer(string trainerId)
        {
            var users = await _usersCollection.Find(u => u.TrainerId ==  trainerId).ToListAsync();

            return users;
        }

        // Update user
        public async Task UpdateUser(string userId, User user)
        {
            // Get the user
            var userFromDb = await GetById(userId);
            if (userFromDb is null)
            {
                return;
            }

            // Set the object id of the original document
            user.Id = userFromDb.Id;
            await _usersCollection.ReplaceOneAsync(u => u.UserId == userId, user);
        }

        // Delete user
        public async Task Delete(string userId)
        {
            // Get the user
            var userFromDb = await GetById(userId);
            if (userFromDb is null)
            {
                return;
            }
            await _usersCollection.DeleteOneAsync(u => u.UserId == userId);
        }
    }
}
