using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using StoryDairy.Core.Model;
using StoryDairy.Core.Presistance;

namespace StoryDairy.Core.Ripository
{
    public class UserRepository : IUserRepository
    {
        private readonly StoryDbContext context;

        public UserRepository(StoryDbContext context) 
        {
            this.context = context;
        }

        public void Add(User user)
        {
            context.Users.Add(user);
        }

        public User Get(string userId, string password)
        {
            return context.Users.Where(u => u.UserId == userId && u.Password == password).FirstOrDefault();
        }
    }
}
