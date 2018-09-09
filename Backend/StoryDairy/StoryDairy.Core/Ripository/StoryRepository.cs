using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using StoryDairy.Core.Model;
using StoryDairy.Core.Presistance;
using StoryDairy.Core.Resources;

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
            if (story.DateTime == default(DateTime))
            {
                story.DateTime = DateTime.Now;
            }
            context.Add(story);
        }

        public IEnumerable<Story> Get()
        {
            return context.Stories.ToList();
        }

        public Story Get(int id)
        {
            var itemFromDb = context.Stories.SingleOrDefault(s => s.Id == id);
            return itemFromDb;
        }
    }
}
