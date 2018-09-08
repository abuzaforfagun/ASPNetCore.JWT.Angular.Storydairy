using System;
using System.Collections.Generic;
using System.Text;
using StoryDairy.Core.Presistance;

namespace StoryDairy.Core.Ripository
{
    public class UnitOfWork
    {
        private readonly StoryDbContext context;

        public StoryRepository StoryRepository { get; set; }

        public UnitOfWork(StoryDbContext context)
        {
            this.context = context;
            StoryRepository = new StoryRepository(context);
        }

        public void Done()
        {
            context.SaveChanges();
        }
    }
}
