namespace StoryDairy.Core.Ripository
{
    public interface IUnitOfWork
    {
        IStoryRepository StoryRepository { get; set; }
        IUserRepository UserRepository { get; set; }

        void Done();
    }
}