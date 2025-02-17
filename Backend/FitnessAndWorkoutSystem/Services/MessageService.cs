﻿using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Services
{
    public class MessageService: IMessageService
    {
        private readonly IMessageRepository _repo;

        public MessageService(IMessageRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<Message>> GetAllMessages(string senderId, string receiverId)
        {
            var messages = await _repo.GetAll(senderId, receiverId);
            return messages;
        }

        public async Task AddMessage(Message message)
        {
            await _repo.Add(message);
        }
    }
}
