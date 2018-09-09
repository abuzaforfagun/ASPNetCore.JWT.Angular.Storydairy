using System.Collections.Generic;
using StoryDairy.Core.Model;

namespace StoryDairy.Core.Ripository
{
    public interface IStoryRepository
    {
        void Add(Story story);
        IEnumerable<Story> Get();
    }
}