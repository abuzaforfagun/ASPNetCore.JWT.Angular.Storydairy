namespace StoryDairy.Core.Ripository
{
    public interface IUnitOfWork
    {
        StoryRepository StoryRepository { get; set; }
        UserRepository UserRepository { get; set; }

        void Done();
    }
}