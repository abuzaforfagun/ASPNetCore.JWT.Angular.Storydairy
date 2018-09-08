using System;
using System.Collections.Generic;
using System.Text;
using StoryDairy.Core.Model;
using StoryDairy.Core.Presistance;

namespace StoryDairy.Core.Ripository
{
    public class StoryRepository : IStoryRepository
    {
        private readonly StoryDbContext context;

        public StoryRepository(StoryDbContext context)
        {
            this.context = context;
        }

        public void Add(Story story)
        {
            context.Add(story);
        }
    }
}
