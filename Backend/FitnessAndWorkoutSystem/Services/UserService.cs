using System.Security.Cryptography;
using System.Text;
using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Services
{
    public class UserService: IUserService
    {
        private readonly IUserRepository _userRepo;
        public UserService(IUserRepository userRepo)
        {
            _userRepo = userRepo;
        }

        // Function to hash a string (password)
        public static string ComputeHash(string source)
        {
            byte[] tmpSource;
            byte[] tmpHash;

            tmpSource = Encoding.ASCII.GetBytes(source);
            tmpHash = SHA256.HashData(tmpSource);

            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < tmpHash.Length; i++)
            {
                sb.Append(tmpHash[i].ToString("X2"));
            }

            return sb.ToString();
        }

        public async Task AddUser(User user)
        {
            // Hash the password before adding to database
            user.Password = ComputeHash(user.Password);
            await _userRepo.Add(user);
        }

        public async Task<User?> GetUserByEmail(string email)
        {
            return await _userRepo.GetByEmail(email);
        }

        public async Task<User?> GetUserById(string userId)
        {
            return await _userRepo.GetById(userId);
        }

        public async Task<List<User>?> GetUsersByRole(string role)
        {
            return await _userRepo.GetByRole(role);
        }

        public async Task UpdateUser(string userId, User user)
        {
            await _userRepo.UpdateUser(userId, user);
        }
    }
}
