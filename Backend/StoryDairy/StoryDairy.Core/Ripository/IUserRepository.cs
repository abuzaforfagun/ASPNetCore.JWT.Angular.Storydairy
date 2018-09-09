using StoryDairy.Core.Model;

namespace StoryDairy.Core.Ripository
{
    public interface IUserRepository
    {
        void Add(User user);
        User Get(string userId, string password);
    }
}