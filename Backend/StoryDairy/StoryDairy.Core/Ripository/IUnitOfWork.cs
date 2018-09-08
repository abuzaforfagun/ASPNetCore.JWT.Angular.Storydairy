namespace StoryDairy.Core.Ripository
{
    public interface IUnitOfWork
    {
        StoryRepository StoryRepository { get; set; }

        void Done();
    }
}